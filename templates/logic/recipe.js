const Holidays = require('date-holidays');
const hd = new Holidays('US', 'la', 'no');

const ruleRecipeTags = {
	'01-01 and if sunday then next monday if saturday then previous friday': ['new year', 'champagne', 'prosecco', 'mimosa', 'sparkling', 'gold', 'magic', 'jungle juice'], // New Year's Day
	'Super Bowl': ['super bowl', 'superbowl', 'football cups', 'jello shot american flag', 'The $40 Jungle Juice', 'team usa', 'Frozen Beergarita', 'Beer Margarita', 'Sour Patch Tequila Shots', 'Bacon Maple Jello Shots', 'Sweet Revenge Strawberry Jungle Juice', 'jungle juice', 'party punch'],
	'02-14': ['valentine', 'red hot slush', 'drunk in love', 'bombastic love', 'love berry', 'love in the sky', 'elixir of love', 'love potion'], // Valentine's Day
	'easter -47': ['mardi gras', 'king cake', 'blowjob', 'buttery nipple', 'funfetti'], // Mardi Gras
	'Spring Break': ['The $40 Jungle Juice', 'Epic Margarita Jungle Juice', '$30 Strawberry Jungle Juice', 'Strawberry Margarita By The Gallon', 'Bulldog Fishbowl', 'watermelon keg', 'Pineapple Keg', 'Devil\'s Thanksgiving Jungle Juice', 'Extreme Vodka Watermelon', 'Mini Vodka Watermelon Bowl', 'Sexy Watermelon', 'Green Jungle Juice Shots', 'Hawaiian Jungle Juice', 'Sweet Revenge Strawberry Jungle Juice', 'watermelon', 'colada', 'gallon'],
	'03-17': ['st. patrick', 'st patrick', 'leprechaun', 'irish'], // St. Patrick's Day
	'April Fools': ['tapeworm shot', 'pickleback jello shots', 'c*m shot', 'cement mixer', 'drain pipe', 'prairie chicken', 'gag reflex', 'toilet water', 'bong water', 'swamp water', 'la water', 'drunken dirt worm', 'oyster shooter'],
	'easter': ['easter', 'mimosa', 'brunch', 'sunrise'], // Easter
	'420': ['marijuana', 'mary jane', 'bob marley', '420', 'mermaid water', 'bong water', 'Hpnotiq Purple Haze', 'Purple Haze Shot', 'margarita'],
	'Cinco de Mayo': ['cinco', 'mexican sunset', 'Cucumber Watermelon Mexican Candy', 'Mexican Candy', 'Three Wise Men and a Mexican', 'Mexican Mad Dog', 'sunrise'],
	'2nd sunday in May': ["mother's day", 'island mimosa', 'paloma mimosa', 'coconut pineapple mimosa', 'spicy tequila sunrise', 'mango tequila sunrise', 'sailors sunrise', 'strawberry tequila sunrise', 'the bahama mama', 'mimosa'], // Mother's Day
	'monday before 06-01': ['america', 'bomb pop shot', 'washington apple cocktail', 'the motorcade', 'ak-47 cocktail', 'mk-1 grenade', 'bomb fish bowl', 'jager bomb trash', 'frozen beergarita', 'beerita'], // Memorial Day
	'3rd sunday in June': ['father', 'Night Night Daddy Shots', 'Sugar Daddy Shots', 'black magic screwdriver', 'Pink Screwdriver', 'Power Drill', 'Jack Hammer', 'Boat Gas', 'Beergarita', 'Smoking Gun Tequila Mule', 'Corona Sunrise', 'sailors sunrise', 'mango tequila sunrise', 'sunrise', 'mimosa'], // Father's Day
	'07-04 and if sunday then next monday if saturday then previous friday': ['4th of july', '4th july', 'america', 'Bomb Pop Shot', 'Red, White & Blue Jello Colada'], // Independence Day
	'1st monday in September': ['Cherry Beergarita Pitcher', 'Classic Mimosa', 'Beachy Peachy Sangria', 'Power Drill', 'Summer Beer', 'Blue Moon Mango Margarita', 'AMF Jello Shots', 'Sunday Funday', 'Not Your Father\'s Root Beer Float', 'Vegan Jello Shots', 'sailors sunrise', 'mango tequila sunrise'], // Labor Day
	'Oktoberfest': ['oktoberfest', 'The Flaming German', 'Beer & Deer', 'Little Beer', 'Sake Bomb', 'Harry Potter\'s Butter Beer', 'Beerita', 'Golden Dagger', 'Beer Jello Shots', 'Boilermaker', 'Atomic Jägerbomb', 'Beer Snow Cones', 'Baby Guinness Shot', 'Bear Fight', 'Black-Beer-Y Smash', 'beer'],
	'10-31 18:00': ['halloween', 'spooky', 'pumpkin'], // Halloween
	'4th thursday in November': ['thanksgiving', 'pumpkin spice', 'apple pie', 'mulled wine', 'pumpkin pie', 'pumpkin'], // Thanksgiving
	'12-24': ['The Grinch Cocktail', 'The Grinch Hot Chocolate', 'Candy Cane Hot Chocolate', 'Candy Cane Shot Glasses with Candy Cane Vodka', 'christmas', 'eggnog', 'egg nog'], // Christmas Eve
	'12-25 and if sunday then next monday if saturday then previous friday': ['mistletoe', 'jack frostie', 'Christmas On Rosecrans', 'Bone Daddy (Nightmare Before Christmas)', 'Christmas Mimosa', 'Christmas Sangria', 'Christmas Tree Shot',	'Mexican Christmas', 'White Christmas Hot Chocolate', 'Fiery Eggnog', 'Saucy Eggnog', 'Eggnog White Russian', 'gingerbread'], // Christmas Day
	'12-31': ['new year', 'champagne', 'prosecco', 'mimosa', 'sparkling', 'gold', 'magic', 'jungle juice'], // New Year's Eve
}

function createRelativeDate(month, day) {
	const current = new Date();
	const compare = new Date();

	compare.setUTCHours(0, 0, 0, 0);
	compare.setUTCMonth(month - 1, day);

	return compare;
}

const customHolidays = {
	'Super Bowl': {
		2023: [2, 12],
		2024: [2, 11],
		2025: [2, 9],
		2026: [2, 8],
		2027: [2, 14],
		2028: [2, 13],
	},
	'Spring Break': [3, 1],
	'April Fools': [4, 1],
	'420': [4, 20],
	'Cinco de Mayo': [5, 5],
	'Oktoberfest': {
		2023: [9, 16],
		2024: [9, 21],
		2025: [9, 20],
		2026: [9, 19],
		2027: [9, 18],
		2028: [9, 16],
		2029: [9, 22],
		2030: [9, 21],
		2031: [9, 20],
		2032: [9, 18],
		2033: [9, 17],
		2034: [9, 16],
	}
}

function createCustomHoliday(name, month, day) {
	return {
		start: createRelativeDate(month, day),
		name: name,
		rule: name,
	}
}

const acceptedRules = [
	'01-01 and if sunday then next monday if saturday then previous friday',
	'02-14',
	'easter -47',
	'03-17',
	'easter',
	'2nd sunday in May',
	'monday before 06-01',
	'3rd sunday in June',
	'07-04 and if sunday then next monday if saturday then previous friday',
	'1st monday in September',
	'10-31 18:00',
	'4th thursday in November',
	'12-24',
	'12-25 and if sunday then next monday if saturday then previous friday',
	'12-31'
]

let availableHolidays = [];
function updateHolidays() {
	let yearHolidays = hd.getHolidays();

	// Remove the holidays that are not accepted
	for (let a = 0; a < yearHolidays.length; a++) {
		if (!acceptedRules.includes(yearHolidays[a].rule) || yearHolidays[a].substitute === true) {
			yearHolidays.splice(a, 1);
			a--;
		}
	}

	// Add our custom holidays
	const currentYear = new Date().getUTCFullYear();
	for (let [name, date] of Object.entries(customHolidays)) {
		if (typeof date === 'object' && !Array.isArray(date)) date = date[currentYear];

		// Create the holiday
		if (date === undefined) continue;
		const customHoliday = createCustomHoliday(name, date[0], date[1]);

		// Insert the holiday
		for (const holiday of yearHolidays) {
			if (customHoliday.start - holiday.start < 0) {
				yearHolidays.splice(yearHolidays.indexOf(holiday), 0, customHoliday);
				break;
			}
		}
	}


	for(const ruleKey in ruleRecipeTags){
		const tags = ruleRecipeTags[ruleKey];
		for(let a = 0; a < tags.length; a++){
			ruleRecipeTags[ruleKey][a] = tags[a].toLowerCase();
		}
	}

	availableHolidays = yearHolidays;
}

function getCurrentHoliday(currentDate) {
	let lastPassedIndex;
	for (let a = 0; a < availableHolidays.length; a++) {
		if (availableHolidays[a].start - currentDate < 0) lastPassedIndex = a;
	}
	if (lastPassedIndex === undefined) lastPassedIndex = 0;

	const currentHoliday = availableHolidays[lastPassedIndex];
	if (lastPassedIndex === availableHolidays.length - 1) return currentHoliday;
	else {
		// Calculate current holiday
		const daysSinceCurrentHoliday = currentDate.getUTCDate() - currentHoliday.start.getUTCDate();

		// Calculate next holiday
		const nextHoliday = availableHolidays[lastPassedIndex + 1];
		const timeToNextHoliday = nextHoliday.start - currentDate;
		const daysToNextHoliday = timeToNextHoliday / (1000 * 60 * 60 * 24);

		// If it is the same day as the current holiday
		if (daysSinceCurrentHoliday === 0) return currentHoliday;
		else if (daysToNextHoliday < 3) return nextHoliday; // If the next holiday is within 3 days
		else if (daysSinceCurrentHoliday === 1) return currentHoliday; // If it's only been 1 day since the current holiday
		else if (daysToNextHoliday < 7) return nextHoliday; // If the next holiday is within 7 days
		else if (daysSinceCurrentHoliday < 4) return currentHoliday; // If it's been less than 4 days since the current holiday
		else return nextHoliday; // If the next holiday is more than 7 days away, switch to it immediately
	}
}

function findMatchingRecipesForTags(pages, tags, limit = 16, rowLength = 4) {
	if(tags === undefined) return [];

	const matches = {};
	for (const page of pages) {
		if (page.content === undefined) continue;

		let matched = false;

		const lowerCaseTitle = page.title.toLowerCase();
		for (let tag of tags) {
			tag = tag.toLowerCase();
			if (lowerCaseTitle.includes(tag)) {
				if (matches[tag] === undefined) matches[tag] = [];
				matches[tag].unshift(page);
				matched = true;
				break;
			}
		}
		if (matched) continue;
	}

	const output = [];
	for (const tag of tags) {
		if(matches[tag] != undefined){
			for (const match of matches[tag]) {
				output.push(match);
				if (output.length >= limit) return output;
			}
		}
	}
	return output;
}

const fs = require('fs');
let lastUpdate = 0;
module.exports = {
	limit: 10,
	init: async function (templateData) {
		// If it's been at least 10 minutes since the last update, update the holidays
		const currentDate = new Date();
		if (1000 * 60 * 10 < currentDate - lastUpdate) {
			lastUpdate = currentDate;
			updateHolidays();

			// Get holiday & recipes
			let currentHoliday = getCurrentHoliday(currentDate);
			// currentHoliday = availableHolidays[19];
			const topRecipes = findMatchingRecipesForTags(templateData.recipe.pages, ruleRecipeTags[currentHoliday.rule]);

			tired.watch.ignoreNext('templates/data/holiday.json');

			// Save the holiday drinks
			templateData.holiday = { name: currentHoliday.name, pages: topRecipes };
			fs.writeFileSync('templates/data/holiday.json', JSON.stringify(templateData.holiday));
		}
	}
}