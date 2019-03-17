(() => {
console.log('JavaScript file is linked.');
	
// 	let malek    = document.getElementById('malek'), // Malek's Image
// 		cindy    = document.getElementById('cindy'), // Cindy's Image
// 		malekBox = document.getElementById('boxM'),  // Malek Div
// 		cindyBox = document.getElementById('boxC'),  // Cindy Div
// 		  

// 	function expandM(){
// 		malek.classList.toggle('expand');
// 		
// 		console.log('Malek transformed.');
// 	};

// 	function expandC(){
// 		cindy.classList.toggle('expand')
// 		bioC.classList.toggle('gone')
// 		console.log('Cindy transformed.');
// 	};


// malek.addEventListener('click', expandM);

// cindy.addEventListener('click', expandC);


	let malek    = document.getElementById('malekH2'),
		cindy    = document.getElementById('cindyH2'),
		bioM     = document.getElementById('bioM'),  // Malek Bio
 		bioC     = document.getElementById('bioC'),	 // Cindy Bio
		image    = document.getElementById('aviBox'),
		sources  = ['images/malek.jpg', 'images/cindy.jpg'],
		sourceM  = 'images/malek.jpg';
		sourceC  = 'images/cindy.jpg';

		function malekDisplay(){
			console.log('Malek displayed.');
			image.src = sourceM;
			bioM.classList.add('show');
			bioC.classList.remove('show');
			// image.src = 'images/malek.jpg';
		}

		function cindyDiplay(){
			console.log('Cindy displayed.');
			image.src = sourceC;
			bioC.classList.add('show');
			bioM.classList.remove('show');
		}


		malek.addEventListener('click', malekDisplay);

		cindy.addEventListener('click', cindyDiplay);


})();
