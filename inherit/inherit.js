var food = {
	name: 'vege and meat',
	getPrice: function(){
		return this.price * this.amount;
	},
	getFat: function(){
		return this.calorie;
	}
};
//differential inheritance
var ham = Object.create(food); //ham.__proto__ === food =>true
ham.name = 'ham';
ham.calorie = 5000;
ham.amount = 10;
ham.price = 20;

ham.getFat()//return 5000
ham.getPrice()//return 200

//how to create a new Object
//method 1, use literal like food
//method 2, use Object.create like ham
//method 3, use new key word

var Car = function(cname){
	var name = cname;
	return {
		getName: function(){
			return name;
		}
	};
};

var volvo = new Car('volvo');
var beatles = Car('beatles');
console.log(volvo.getName());
console.log(beatles.getName());