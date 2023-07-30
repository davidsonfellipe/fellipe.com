var Canvas = function(canvas){

    this.canvas = canvas;

    this.ctx = canvas.getContext('2d');

    this.imageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);

    this.data = this.imageData.data;
};

Canvas.prototype.draw = function(color) {

    for (var y = 0; y < this.canvas.height; ++y) {
        for (var x = 0; x < this.canvas.width; ++x) {

            var index = (y * this.canvas.width + x) * 4;

            this.data[index]   = color.R;   // red
            this.data[++index] = color.G; // green
            this.data[++index] = color.B;   // blue
            this.data[++index] = 255; // alpha
        }
    }

    this.ctx.putImageData(this.imageData, 0, 0);
};