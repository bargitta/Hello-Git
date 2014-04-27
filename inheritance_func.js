var mammal = function(spec){

	var that = {};
	that.getName = function(){
		return spec.name;
	};
	that.says = function(){
		return spec.saying;
	};
	return that;
};

var myMammal = mammal({name:'ele',saying:'tt'});
console.log(myMammal.says());
console.log(myMammal.getName());

var cat = function(spec){
	spec.saying = spec.saying || 'mm';
	var that = mammal(spec);
	that.weight = function(w){
		return w;
	};
	
	return that;
};

var myCat = cat({name:'kitty', saying:'a'});
console.log(myCat.says());
console.log(myCat.weight(20));
console.log(myCat.getName());