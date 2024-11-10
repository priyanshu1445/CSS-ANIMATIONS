document.addEventListener('DOMContentLoaded',()=>{
	const links = document.querySelectorAll('ul li a');
	const testblock = document.getElementById('test-block');


	links.forEach(link =>{

		link.addEventListener('click',function(event){
			// jispe active class h waha s hatao
			links.forEach(link => link.classList.remove('active'));

			// jispe click kiya gya h uspe active class lagao
			this.classList.add('active');


			if(this.id==='home')
			{
				testblock.style.transform = 'translateY(0)';
			}
			else if(this.id==='about')
			{
				testblock.style.transform = 'translateY(-185px)';
			}
			else if(this.id==='contact')
			{
				testblock.style.transform = 'translateY(-370px)';
			}

			// stop page from reloading
			event.preventDefault();

		});

	});




});