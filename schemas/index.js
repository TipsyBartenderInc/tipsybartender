const schema = [
	{
		"@context": "http://schema.org",
		"@type": "Organization",
		"name": "TipsyBartender",
		"url": "https://www.tipsybartender.com",
		"logo": {
			"@type": "ImageObject",
			"url": "https://tipsybartender.com/wp-content/uploads/2020/12/logo.png",
			"width": 28,
			"height": 72
		},
		"sameAs": [
			"https://www.facebook.com/TipsyBartender",
			"https://twitter.com/TipsyBartender",
			"https://www.pinterest.com/tipsybartender/",
			"https://www.instagram.com/tipsybartender/"
		]
	},
	{
		"@context": "https://schema.org",
		"@type": "SiteNavigationElement",
		"name": [
			[
				"Margaritas", "Halloween", "AMFs", "Sexy Drinks", "Pumpkin Cocktails", "Strong Cocktails", "Sangrias", "Holidays & Occasions", "Fireball Drinks", "Shots & Shooters", "Candy Cocktails", "Classic Cocktails", "Mojitos", "Wine Cocktails", "Party Punches", "Tropical Cocktails", "Daiquiris", "Pink Cocktails", "Purple Cocktails", "Beer", "Bachelorette Party ", "Birthday Cocktails", "Bomb Shots", "Blue Drinks", "Brunch", "Champagne", "Cider Drinks", "Dessert Drinks", "Party Drinks", "Popsicles", "Fishbowls", "White Russians", "Hot/Warm Drinks"]
		],
		"url": [
			[
				"https://tipsybartender.com/drinks/best-margarita-recipes/", "https://tipsybartender.com/drinks/halloween-cocktails/", "https://tipsybartender.com/drinks/long-island-iced-teas/", "https://tipsybartender.com/drinks/sexy-drinks/", "https://tipsybartender.com/drinks/pumpkin-cocktails-drinks/", "https://tipsybartender.com/drinks/strong-cocktails/", "https://tipsybartender.com/drinks/sangria-recipes/", "https://tipsybartender.com/drinks/holiday-party-cocktails-special-occasions/", "https://tipsybartender.com/drinks/fireball-drinks/", "https://tipsybartender.com/drinks/shots-shooters/", "https://tipsybartender.com/drinks/candy-cocktails/", "https://tipsybartender.com/drinks/classic-cocktails/", "https://tipsybartender.com/drinks/mojito-recipe/", "https://tipsybartender.com/drinks/wine-cocktails/", "https://tipsybartender.com/drinks/party-punches/", "https://tipsybartender.com/drinks/tropical-drinks/", "https://tipsybartender.com/drinks/daiquiri-recipes/", "https://tipsybartender.com/drinks/pink-cocktails/", "https://tipsybartender.com/drinks/purple-cocktails/", "https://tipsybartender.com/drinks/beer-cocktails/", "https://tipsybartender.com/drinks/bachelorette-party-drinks/", "https://tipsybartender.com/drinks/birthday-cocktails/", "https://tipsybartender.com/drinks/bomb-shots/", "https://tipsybartender.com/drinks/blue-drinks/", "https://tipsybartender.com/drinks/brunch-cocktails/", "https://tipsybartender.com/drinks/champagne-cocktails/", "https://tipsybartender.com/drinks/cider-drinks/", "https://tipsybartender.com/drinks/dessert-drinks/", "https://tipsybartender.com/drinks/party-drinks/", "https://tipsybartender.com/drinks/cocktail-popsicles/", "https://tipsybartender.com/drinks/fishbowl-drinks/", "https://tipsybartender.com/drinks/white-russian-cocktails/", "https://tipsybartender.com/drinks/hot-cocktails-drinks/"]
		]
	},
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"url": "https://tipsybartender.com/",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://tipsybartender.com/?s={search_term_string}&post_type=recipe",
			"query-input": "required name=search_term_string"
		}
	}
]