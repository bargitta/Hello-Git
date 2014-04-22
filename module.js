Function.prototype.method = function (name,func){

	if(!this.prototype[name]){
		this.prototype[name] = func;
	}
	return this;//return this for chain
};

Number .method('add', function(a){
		if(typeof a === 'number')
			return this + a;})
	
		.method('sub', function(b){
		if(typeof b === 'number')
			return this - b;
		});
console.log((3).sub(10).add(5));

String.method('deentityify', function(){
	var entity = {
		quot: '"',
		lt: '<',
		gt: '>' 
	};

	return function(){
		return this.replace(/&([^&;]+);/g, function(a,b){
			var r = entity[b];
			return typeof r === 'string' ? r : a;

		});
	};
}());
//var a = '&lt;&quot;&gt;';

console.log('&lt;&quot;&gt;'.deentityify());
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
