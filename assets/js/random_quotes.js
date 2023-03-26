// Javascript for Random Quotes 


/*

QUOTES

1) 

q) If people sat outside and looked at the stars each night, I'll bet 
they'd live a lot differently.

a) Bill Watterson



2)

q) Your work is going to fill a large part of your life, and the only way 
to be truly satisfied is to do what you believe is great work. And the only 
way to do great work is to love what you do.

a) Steve Jobs



3)

q) Everything around you that you call life was made up by people that 
were no smarter than you and you can change it, you can influence it, you 
can build your own things that other people can use.

a) Steve Jobs

*/



// Loop for Random Quotes in Footer 

const quote = document.querySelector('#random_quotes');

let newQuote = '';

let quote1 = "If people sat outside and looked at the stars each night, I'll bet they'd live a lot differently.";
let author1 = "Bill Watterson"

let quote2 = "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
let author2 = "Steve Jobs";


for ( let i = 1; i < 2; i++ ) {

	newQuote += `
		<div class="footer_quotes quote1">
			<q>${quote1}</q>

			<div>&nbsp; - ${author1}</div>
		</div>
	`;
}

quote.innerHTML = newQuote;


