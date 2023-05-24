let attr = {
	linkTree: "[]"
};
const node = {
	text: "",
	add: function (text) {
		this.text += text;
	}
}
const log = function (text = "") {
	node.add(text);
}
function run() {
	attr.linkTree = JSON.parse(attr.linkTree); node.add(`
`); attr.linkTree.unshift({ name: "all", title: "All Drinks" }); node.add(`
<div class="breadcrumbs">
`); for (let a = 0; a < attr.linkTree.length; a++) {
		; node.add(`
`); let link = attr.linkTree[a]; node.add(`
`); let lastItem = a === attr.linkTree.length - 1; node.add(`
<div class="breadcrumb `); log(lastItem ? "current" : ""); node.add(`">
	<a href="/drinks/`); log(link.name); node.add(`" class="column">
		<div>`); log(link.title); node.add(`</div>
	</a>
</div>
`); if (!lastItem) {
			; node.add(`
<div class="breadcrumb-separator column">
	<div class="arrow right"></div>
</div>
`);
		}; node.add(`
`);
	}; node.add(`
</div>`); return node.text;
} run();