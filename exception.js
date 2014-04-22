var add = function(a, b){
	if(typeof a !== 'number' || typeof b !== 'number'){
		throw{
			name: 'TypeError',
			message: 'input should be numbers'
		};
	}
	return a + b;
};

var calladd = function(){

	try{
		add(3,'abcd');
	}catch (e){
		console.log(e.name + ': ' + e.message);
	}
};

calladd();