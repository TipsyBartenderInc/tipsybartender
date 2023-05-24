function sameId(id, page) {
	return id === page.id;
}

function loadIds(idArray, pageDict, linkPage = false) {
	const subcollectionArray = [];
	for (const id of idArray) {
		let foundPage = pageDict[id];

		if (foundPage != undefined) {
			if (linkPage != false) {
				foundPage.parentCollection.push({
					id: linkPage.id,
					name: linkPage.name,
					title: linkPage.title
				});
			}
			subcollectionArray.push(JSON.parse(JSON.stringify(foundPage)));
		} else console.log("NO PAGE FOR ID:", id);
	}
	return subcollectionArray;
}

function getLinkParent(parentCollection){
	if(parentCollection.length === 0) return false;
	// return 1 < parentCollection.length ? parentCollection[1] : parentCollection[0];
	return parentCollection[0];
}
function getLinkTree(current, all) {
	const linkTree = [
		{ name: current.name, title: current.title }
	];
	let target = current;
	while (linkTree.length < 3) {
		if (target.parentCollection.length === 0) break;
		else {
			// Set the new target
			target = all[getLinkParent(target.parentCollection).id]

			// Push the collection to the front
			linkTree.unshift({ name: target.name, title: target.title });
		}
	}
	return linkTree;
}

function generateDictFromId(inputArray) {
	const output = {};
	for (const input of inputArray) {
		output[input.id] = input;
		output[input.id].parentCollection = []
	}
	return output;
}

let loaded = false;
module.exports = {
	limit: 2,
	init: async function (templateData) {
		if (loaded === false) {
			loaded = true;

			console.time("LOAD IDS");
			const drinksDict = generateDictFromId(templateData.recipes.pages);
			const recipeDict = generateDictFromId(templateData.recipe.pages);

			const recipePages = templateData.recipe.pages;
			for (const page of templateData.recipes.pages) {
				page.loadedSubcollections = loadIds(page.subcollections, drinksDict, page);
				page.loadedDrinks = loadIds(page.drinks, recipeDict);
			}
			console.timeEnd("LOAD IDS");

			console.time("LINK TREE");
			for (const page of templateData.recipes.pages) {
				page.linkTree = getLinkTree(drinksDict[page.id], drinksDict);
			}
			console.timeEnd("LINK TREE");
		}
	}
}