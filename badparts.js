var tools = tools || {};
tools.isNumber = function(v){
	return typeof v === 'number' && isFinite(v);
};

tools.isArray = function(v){
	return Object.prototype.toString.apply(v) === '[object Array]';
		
};
tools.falsyValues = function(){
	return [0,'',null,NaN,false,undefined];
}

(function(){console.log("executed immediately...")}());

var test = function(){

	console.log(tools.isArray(arguments));//false
	console.log(tools.isArray(['1']))//true
	
	
};

test();