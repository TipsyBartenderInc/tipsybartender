const navElement = document.querySelector("#nav");
const navPopoutElement = document.querySelector("#nav .popout");
const navMobileMenu = document.querySelector("#navMobileMenu");
const navMobileMenuBackground = document.querySelector("#navMobileMenu .background");
let navStatus = false;
function updateNavState(){
	if(window.getComputedStyle(this.parentNode).display != 'none'){
		if(!navStatus){
			navStatus = true;

			const navHeight = navElement.clientHeight;
			const expandableHeight = window.innerHeight;
	
			// Set parameters of expanding nav
			navMobileMenu.style.display = "block";
			navMobileMenu.style.top = navHeight + "px";
			navMobileMenu.style.height = (expandableHeight - navHeight) + "px";
	
			// Set spacer height to make up for fixed nav
			navElement.style.height = navHeight + "px";
			navPopoutElement.style.position = "fixed";
	
			setTimeout(function(){
				if(navStatus) navElement.classList.toggle("expanded", true);
			}, 50);
		} else {
			navStatus = false;

			navElement.style.height = null;			
			navPopoutElement.style.position = null;

			navMobileMenu.style.display = null;
			navElement.classList.toggle("expanded", false);
		}
	}
}
const navBurgers = document.querySelectorAll(".navBurger");
for(const burger of navBurgers){
	burger.addEventListener("click", updateNavState);
}