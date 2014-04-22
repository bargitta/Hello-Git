Function.prototype.method = function (name,func){

	if(!this.prototype[name]){
		this.prototype[name] = func;
	}
	return this;//return this for chain
};

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
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
