const Decorator = function(litresPerCan){
    this.litresPerCan = litresPerCan;
    this.paintStock = [];
    
}

Decorator.prototype.getPaintStock = function(){
    return this.paintStock.length;
}

Decorator.prototype.addToStock = function(paintCan){
    this.paintStock.push(paintCan);

}

Decorator.prototype.calculateTotal = function(){
    this.litresPerCan = 5;
    this.paintStock = [3];
    total = this.litresPerCan * this.paintStock.length;
    return total
}

module.exports = Decorator