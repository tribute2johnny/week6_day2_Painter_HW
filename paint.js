const Paint = function(volume, isEmpty){
    this.volume = volume
    this.isEmpty = isEmpty
}

Paint.prototype.empty = function(){
    this.isEmpty = false;
}

module.exports = Paint;
