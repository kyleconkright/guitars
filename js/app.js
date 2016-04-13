(function(){

	var app = angular.module('testStore', []);

	app.controller('StoreController', function(){
		this.products = items;
	});	

	var items = [
		{
			name: 'Gibson',
			price: 800,
			description: 'Random Text',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Martin',
			price: 1100,
			description: 'Random Text',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Epiphone',
			price: 400,
			description: 'Random Text',
			canPurchase: true,
			soldOut: false
		}
	];

})();


