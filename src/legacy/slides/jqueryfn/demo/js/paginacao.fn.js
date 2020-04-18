/**
 * Description: widget para controlar a paginacao
 * Autor: Davidson Fellipe
 * Dependencias:
 * 1 - jQuery[1.4.2]
 *
*/
(function(global, $) {
    
    $.fn.Paginacao = function(options) {
        
        if( $(this).length > 0 ){
	
			$.extend(this, this.Paginacao.methods);
			
            this.__init__(options);
            
            return this;
            
		}else{
		    
			$.error('selector not found on Paginacao');
			
			return;
			
		}
    };
    
    var _self = this;
    
    $.fn.Paginacao.defaults = {
		textButton: "mais",
		paginaAtual: 1,
		total: 0,
		urlJSON: "",
		itensPorPagina: 1
    };
    
    $.fn.Paginacao.methods= {
        
		__init__: function(options) {
			
			if(options.urlJSON !== ""){
			
				_self = this;
			    
			    //Merge do conteudo de dois ou mais objetos dentro do primeiro.
				_self.options = $.extend({}, $.fn.Paginacao.defaults, options);
				
				_self.__cacheDom__();
				
				_self.__configBotaoPaginacao__();
			}
		},
        
        //realiza cache de elementos DOM
        __cacheDom__: function() {
            _self.domCache = {
                '$buttonPaginacao': $(".paginacao", _self),
                '$mensagemNenhumaNoticia': $(".mensagem-nenhuma-noticia", _self),
                '$listaNoticias': $("ol", _self)
            }
        },
        
        //configura binds e maquina de estados do botao
		__configBotaoPaginacao__: function() {	
		    _self.__bindEvents__();
			_self.__controleBotoesPaginacao__();
		},
		
		__showLoading__: function() {
			_self.domCache["$buttonPaginacao"].html('<img src="img/loading.gif" alt="" />');
		},

		__hideLoading__: function() {
			_self.domCache["$buttonPaginacao"].html(_self.options.textButton);
		},
        
		__montarNoticia__: function(noticia) {
          return  '<li class="materia" itemscope itemtype="http://schema.org/NewsArticle">' +
                '	<div class="materia-chamada">' +
                '		<span class="materia-data" itemprop="publishDate" content="' + noticia.ultima_atualizacao + '">' + noticia.ultima_atualizacao + '</span>' +
                '		<h3 class="materia-titulo">' +
                '			<a href="' + noticia.permalink + '" title="' + noticia.titulo + '" itemprop="name">' + noticia.titulo + '</a>' +
                '		</h3>' +
                '	</div>' +
                '</li>';
      },
	  
      __controleBotoesPaginacao__: function() {
          
			var totalPaginas = Math.ceil(parseInt(_self.options.total, 10)/_self.options.itensPorPagina);
		    
		    if(totalPaginas > _self.options.paginaAtual){
				_self.domCache["$buttonPaginacao"].removeClass("desabilitar-paginacao");
			}else{
				_self.domCache["$buttonPaginacao"].addClass("desabilitar-paginacao");
			}
      },
      
	  __carrega_noticias__: function(){

			_self.__showLoading__();
			
			//prepara url para request do json
			var urlRequest = this.options.urlJSON +  (_self.options.paginaAtual + 1) + ".json";
			
			$.ajax({
		        method: 'get',
		        dataType: 'json',
		        url: urlRequest,
				success: function(response){
					
					//esconde o loading
					_self.__hideLoading__();

					//atualiza configuracoes da rolagem
					_self.options.total = response.totalItens;
					
					if (response.materias.length > 0){
					    
						_self.__esconde_mensagem_sem_noticias__();
						
						var templateNoticia = "";
						
						for( var i = 0, total = response.materias.length; i < total; i++ ){
							
							templateNoticia = _self.__montarNoticia__(response.materias[i]);
		
							_self.domCache["$listaNoticias"].append(templateNoticia);
		
						}
						
						$("li:hidden", _self.domCache["$listaNoticias"]).slideDown("slow");
						
						_self.options.paginaAtual++;
						
						_self.__controleBotoesPaginacao__();
					}else{
						_self.__mostra_mensagem_sem_noticias__();
					}
				}
		    });
		},
		
		__mostra_mensagem_sem_noticias__: function(){
			_self.domCache["$buttonPaginacao"].hide();
			_self.domCache["$mensagemNenhumaNoticia"].show();
		},
		
		__esconde_mensagem_sem_noticias__: function(){
			_self.domCache["$buttonPaginacao"].show();
			_self.domCache["$mensagemNenhumaNoticia"].hide();
		},
				          
        __bindEvents__: function() {
  
            _self.domCache["$buttonPaginacao"].die("click").live("click", function() {
                if(_self.options.total > (_self.options.paginaAtual * _self.options.itensPorPagina)){
					_self.__carrega_noticias__();
				}
            });
        }
        
    };
}(this, this.jQuery));