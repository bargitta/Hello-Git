var cake ={

	flavor: 'mocha',
	weight: '200g',
	ingredients: ['butter','creame','flour','egg','coffee'],
	printOwnProps: function(){
		for(var prop in cake){
			if(cake.hasOwnProperty(prop)){//this will not call methods in prototypes
				console.log(cake[prop]);
			}
		}
	}
}



