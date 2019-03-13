(() => {
console.log('JavaScript file is linked.');
	
	let malek    = document.getElementById('malek'), // Malek's Image
		cindy    = document.getElementById('cindy'), // Cindy's Image
		malekBox = document.getElementById('boxM'),  // Malek Div
		cindyBox = document.getElementById('boxC'),  // Cindy Div
		bioM     = document.getElementById('bioM'),  // Malek Bio
		bioC     = document.getElementById('bioC');  // Cindy Bio

	function expandM(){
		malek.classList.toggle('expand');
		bioM.classList.toggle('gone')
		console.log('Malek transformed.');
	};

	function expandC(){
		cindy.classList.toggle('expand')
		bioC.classList.toggle('gone')
		console.log('Cindy transformed.');
	};


malek.addEventListener('click', expandM);

cindy.addEventListener('click', expandC);

})();
