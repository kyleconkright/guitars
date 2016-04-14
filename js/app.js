(function(){

	var app = angular.module('testStore', []);

	app.controller('StoreController', function(){
		this.products = items;
	});

	app.controller('PanelController', function(){
		this.box = 1;

		this.selectBox = function(setBox) {
			return this.box = setBox;
		}

		this.isSelected = function(checkBox) {
			return this.box === checkBox;
		}

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
		},
		{
			name: 'Fender',
			price: 800,
			description: 'Random Text',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Beryl',
			price: 1100,
			description: 'Random Text',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Danelectro',
			price: 400,
			description: 'Random Text',
			canPurchase: true,
			soldOut: false
		}
	];

})();


