var addsum = function(n){
	if(typeof n !== 'number' || n < 0){
		throw {
			name:'type error',
			message:'expect a postive number.'
		};
	}
	if(n === 1)
		return 1;
	return n + addsum(n - 1);
};

//console.log(addsum(6));
//console.log(addsum(7));

//improvement
//step1: cache previous results of addsum(6), and use it in addsum(7)
var sumarray = [0,1];
var addsum_1 = function(n){
	if(typeof n !== 'number' || n < 0){
		throw {
			name:'type error',
			message:'expect a postive number.'
		};
	}
	if(typeof sumarray[n] === 'number')
		return sumarray[n];	
	sumarray[n] = n + addsum_1(n - 1);		
	return sumarray[n];
};

step2: no global variable sumarray

var addsum_2 = function(){
	var localSumArray = [0,1];
	var add =  function(n){
		var result = localSumArray[n];
		if(typeof result !== 'number')
		{
			result = n + add (n-1);
			localSumArray[n] = result;
		}
		return result;
	}
	return add;
}(); //()=>execute this function, return the add function

var a = addsum_2(3);
var b = addsum_2(4);
console.log(a);
console.log(b);


