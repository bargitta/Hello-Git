//augmenting types
Function.prototype.method = function(name,func) {
	if(!this.prototype[name]){
		this.prototype[name] = func;
	}
	return this;
};

Number.method('print', function (){
	return Math[this < 0 ? 'ceil' : 'floor'](this);
	//return 5;
});

Number.method('report',function(){

	console.log(this.toString());
});
console.log((-3.23).print());
(5).report();