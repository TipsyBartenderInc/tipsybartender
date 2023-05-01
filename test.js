const node = {
	text: "",
	add: function(text){
		this.text += text;
	}
}
const log = function(text){
	node.add(text);
}
function run(){
node.add(`<include src="global.scss" />
<include src="page/recipe.scss" />
<include src="page/text/page.scss" />
<include src="page/recipe/guide.scss" />
<include src="navigation/nav.html" />

<div class="page-content">
<div class="intro-section px-3 pb-4 pt-3">
<h1>
	`); log(attr.title); node.add(`
</h1>
<p class="font-content">
	`); log(attr.oneLiner); node.add(`</p>
</div>
<div class="video-section">
<!-- https://tipsy-web.b-cdn.net/thumbnails/attr.youtube_id.jpg -->
<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/6G50hVGjFrA?controls=0" title="YouTube video player" frameborder="0" controls="0" allow="autoplay;" allowfullscreen></iframe> -->
<div class="video" style="box-shadow: 0 0 20px 0 `);log(attr.imagePalette.Vibrant.hex);node.add(`99">
	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aYG6HstET-M?controls=0"
		title="YouTube video player" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
</div>
</div>
<div class="px-3">
<div class="banner-100"></div>
</div>
<div class="guide-section ingredients-section pt-4">
<h3 class="section-title">What You'll Need</h3>
<div class="items">
	`);for(const item of attr.ingredients) {;node.add(`
	<div class="item `);log(item.amt === undefined ? "" : " amt");node.add(`">
		<div class="text">
			`);log(item.label);node.add(`
		</div>
		`);if(item.amt) {;node.add(`
		<div class="amount">
			`);log(item.amt + " " + item.unit);node.add(`
		</div>
		`);};node.add(`
	</div>
	`);};node.add(`
</div>
</div>
<div class="guide-section gear-section">
<h3 class="section-title">Gear</h3>
<div class="items">
	`);const gear = ["Basic Bar Tools"];
	for(const item of gear) {;node.add(`
	<div class="item">
		<div class="text">
			`);log(item);node.add(`
		</div>
	</div>
	`);};node.add(`
</div>
</div>
`);if(attr.prep != undefined) {;node.add(`
<div class="px-3">
<div class="banner-100"></div>
</div>
<div class="guide-section preparation-section pt-4">
<h3 class="section-title">Preparation</h3>
<div class="steps font-content">
	`);for(let a = 0; a < attr.prep.length; a++) { const item = attr.prep[a];node.add(`
	<div class="step">
		<div class="number">
			`);log(a + 1);node.add(`
		</div>
		<div class="text">
			`);log(item);node.add(`
		</div>
	</div>
	`);};node.add(`
</div>
</div>
`);};node.add(`

<div class="px-3">
<include id="drinkResponsibly" class="pb-4" src="banners/drink-responsibly/1.jpg"
	alt="drink responsibly banner" />
</div>

<div class="px-3">
<div class="banner-100"></div>
</div>

<div class="guide-section more-section pt-4">
<h3 class="section-title">More About This Drink</h3>
<div class="text font-content fw-200">Before we dive into why that’s the case, here are some other sambuca
	cocktails you may enjoy: the Double Sambuca Bomb, the Absinthe with Leave, the Chuck Norris Roundhouse Kick
	to the Face Shot, the Jelly Fish, the Flatliner Shot, and the Hiroshima Shot. In terms of where this Blue
	Jelly Fish comes from, it’s hard to say. The Blue Jellyfish cocktail recipe went viral on the internet at
	some point, and now all we...</div>
</div>

<div class="px-3">
<div class="banner-100"></div>
</div>
</div>

<div class="py-3"></div>

<include src="navigation/social-icons.html" base="footer" />
<include src="navigation/footer.html" />`);return node.text;}run();