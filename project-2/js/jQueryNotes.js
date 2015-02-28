var navList, firstItem, link;
//select all elements in the class 
navList = $('.nav-list');
//Moving to the first item in the DOM tree
firstItem = navList.children().first();
//In the first item, find the link
link = firstItem.find('a');
//apply the attribute
link.attr('href', '#1');


//changing text using jQuary
$('#input').on('change', function() {
	var val, h1
	val = $('#input').val();
	h1 = $('.articles').children('h1');
	h1.text(val);
}


//removes a DOM element h1 
var articleItems, ul;

articleItems = $('.article-item');
ul = articleItems.find('ul');
ul.remove();

//lets say if you want to remove just a particular element such as bold elements of h1
articleItems = $('.article-item');
ul = articleItems.find('ul');
ul.children().remove('.bold');

/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
var family1, bruce, madison, hunter;

family1 = $('#family1');
family2 = $('<div id="family2"<h1>family1</h1></div>');
bruce = $('<div id="bruce"<h2>bruce</h2></div>');
madison = $('<div id="madison"<h3>madison</h3></div>');
hunter = $('<div id="hunter"<h3>hunter</h3></div>');

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);

//iterating each(); 

$(this).text(); //returns text of each element