window.onload = function() {

    [].forEach.call( document.querySelectorAll('.color'), function(el) {
        el.addEventListener("click", function(){
            getChart(this.style.backgroundColor, COLOR[this.id.replace("canvas-", "")]);

            document.querySelectorAll('.color-container')[0].innerHTML = this.style.backgroundColor;
        }, false);
    });

    document.getElementById('cie').addEventListener("change", function(){
        printColorMacbethWavelet ("D65", this.value);
        document.getElementById("canvas-0").click();
    }, false);

    printColorMacbethWavelet ("D65", document.getElementById('cie').value);
    document.getElementById("canvas-0").click();
};