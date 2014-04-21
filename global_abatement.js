var Fin = {};
Fin.Person = function(){
	return {
		name: "x",
		age: 12,
		grade:0,
		getOld: function(){
			this.age++;
		},
		getPromote: function(){
			this.grade++;
		}
	}
};

var lily = new Fin.Person();
console.log(lily.age);
lily.getOld();
console.log(lily.age);

