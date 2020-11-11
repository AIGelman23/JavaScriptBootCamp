// Comments synced to when they are submitted
// All these elements are done through JavaScript
// Hiding and Showing is all done with JavaScript

// HTML + CSS w / JavaScript can make amazing stuff
// Forms, Memory Games
//
// The thing about the DOM is that 
// you have to use different methods
// and properties 
// 
// There are 50 different properties
// It is so huge and it's not something
// you want to completely memorize
//
// Need to understand HTML, CSS 
// Just the basics 

// to use querySelector for elements nested
// inside of a section tag
// 
// document.querySelector('section ul li.special')
// li.special

// document.querySelector('input[type="password"]')
// result - <input type=​"password" placeholder=​"Password">​ 
//
// document.querySelector('input')
// result - <input type=​"text" placeholder=​"Bear Name">​
//
// document.querySelectorAll('.special');
// result - NodeList(4) [input, input, input]
// 
// document.querySelectorAll('li');
// NodeList(6) [li.special, li, li.special, li, li.special, li]
//
// document.querySelectAll('#main');
// NodeList [p#main]
//
// document.getElementsByTagName('li');
// HTMLCollection(6) [li.spcial, li, li.special, li, li.special, li]
// 
// A NodeList is another type of collection
// It is still an HTML paragraph element 
// An array like object that can be saved to a variable
//
// const special = document.querySelectorAll('.special');
// specials[0]
// result - <p class ="special">fsdfdsdsf</p>
//
// specials.length 
// result - 4
// 
// forEach isn't available in an HTMLCollection
// but is available within a NodeList
// don't get bogged down and don't worry about it
// just a slight difference (container AKA fake light
// weight versions of arrays)
//
// recommend going with  querySelector and
// querySelectorAll because we can be more specific
// 
// we pass in a CSS selector as a string and either
// we get the first match using querySelector or a collection
// of all matches using querySelectorAll

// TWISTING the DOM to Our Will
//
/* 
  Sometimes we are accessing data and or what
  are the contents of this DIV and or what did the
  user click on and that is more accessing (manipulation)
  is just the umbrella term. DOM has so many properties
  and can be overwhelming, but we can narrow this down
  to the most important properties that are needed more
  than any of the others...

  - PROPERTIES & METHODS (important ones)
  - classList
  - getAttribute()
  - setAttribute()
  - appendChild()
  - append()
  - prepend()
  - removeChild()
  - remove()
  - createElement
  - innerText
  - textContent
  - value
  - parentElement
  - children
  - nextSibling
  - previousSibling
  - style
*/

// This would apply to any webpage we open

/* 
const H1 = document.querySelector('h1');
H1
  result in console window:
  <h1 class="header">My Webpage</h1>
const ul = document.querySelector('ul');
undefined
ul.innerText
"First Things
Second things
Third Things
"

innerText can be grabbed from the entire document
document.body.innerText

we can reassign this to 

H1.innerText = "I'm Hungry"

and this will update the text

but we should rather update the HTML
based of an event, we are just working 
with the basics of changing elements

ul.innerText = 'I AM A BIG UL'
all of that stuff will be gone
when we set innerText on something we 
would change the entire content and would
lose this

a second property 

H1.innerText
result: "My Webpage"
H1.textContent = "set text inside"

p.innerText would just show the text without formatting
p.textContent knows about script text and also knows
formatting and will shows with the exact text content
if we add a bold tag around content and put an inline 
style and a display: none (we would see nothing or it wouldn't show up)
but if we run p.innerText it isn't there, but with p.textConent
will show whatever inner text exists in the HTML file and cuts
out tags and pure text including script text

innerText is almost always used when selecting, doesn't have 
to calculate anything (can use both but there are differences)
and used to update text within an element

innerHTML is going to return or retrieve not only
the text within an element but all given tags 
within an element 

const form = document.querySelector('form');
form.innerHTML

will give a string that contains all of the elements
inside (whether text or tags)

const ul = document.querySelector('ul') 

gives just the inner text within the UL 

ul.innerHTML can be used to change the text
between the tags

form.innerHTML = "kfafsdffds"

now the entire form only contains this text above
which is usually not what you want to do but 
sometimes yo might want to

all return strings such as innerHTML

form.innerHTML = "<b> I am bold </b>" will 
parse string and looks for these tags and
reflects changes in the DOM

console.dir(form) and look at children - shows
a new object or bold tag object

document.querySelector('h1')
const h1 = document.querySelector('h1');
h1.innerText
"My Webpage"
h1.innerHTML
"My Webpage"
h1.innerHTML += ' is cool'
"My Webpage is cool"

there is a difference between setting an 
innerText versus an innerHTML

if we want to add an element to an H1 tag 
and we want to add a bunch of exclamation points

h1.innerHTML += "<b>!!!!!</b>"
shows text bolded and added

h1.innerText += "<b<!!!!</b>"
doesn't parse or treet text as HTML tags
and doesn't understand they are bold tags
and takes entire string and puts it in 
this element - if trying to add an HTML 
element use innerHTML 


We can use 

const inputs = document.querySelectorAll('input');
inputs[0].value
and this will display the value within this input
"Bubba"
inputs[0].value += ' the bear' 
"Bubba the bear"
inputs[3].checked 
will allow to know if a checkbox is checked
(true / false)
and we can directly set a checkbox 
to be checked = true or not checked = false
inputs[3].checked = false or = true

like a search bar or a single page search
and type something in you see some stuff
load and some search bars empty out while 
others don't

if we check it and do inputs[2].value 
"on"

we can also do the same with a slider

inputs[3].value
"437" 
set so the step of the range is 1 or the default
but if we give it a step property of 50
the value would be "300" 

we can change the placeholder text

inputs[1]
  <input type="password" placeholder="password">
"password"
inputs[1].placeholder = '' or change the text
inside for the placeholder by setting to 
something different or to nothing or an empty
string

const a = document.querySelector('a');
a.href
result - 
"http://www.cats.com/cute"

ann can change the link

a.href = "https://www.google.com"
and the href would change to a different 
website

this would change the attribute of the
anchor tag that would allow the link
to change and direct to google.com instead
of cats.com

const img = document.querySelect('img')
img.src

we can set img.src to equal a different
img src URL and therefore change the image itself

getAttribute & setAttribute

get access or set access on attributes

const range = document.querySelector('input[type="range"]')
We have the type, min, and max attribute

range.getAttribute('max') and gets 500
range.getAttribute('min') and gets 100
range.getAttribute('type') and gets range
range.getAttribute('lolol') and gets null

range.setAttribute('min', '-500')
undefined
range.value
"-350"

we effectively changed that value of the
attribute

range.setAttribute('type', 'radio');
undefined


Finding Traversal and or Neighbor Properties
Find the nearest sibling of child element

A user might click somewhere and based off 
of that click you might have an element selected
and then you might want to base another 
element element

Lets say making a check box list
and to delete this entire li you would 
need to access the parent of this li 
or to delete form 

const firstLi = document.querySelector('li');
undefined
firstLi.parentElement
we will get <ul>...</ul>
firstLI.parentElement.parentElement
will continue to get the parent element
of each every element to work backwards
up the tree
li in this instance doesn't have a child 
element as it is text listed between the li

ul.children 
HTMLCollection(3) [li.special, li, li.special]
> 0 li.special
> 1 li.special
> 2 li.special

finding what is nested inside of a given element

ul.children[0] and we would work with the first
li and can access innerText 
ul.children[0].innerText
"First Thing"

firstLi.nextElementSibling
  <li>Second Thing</li>
firstLi.nextElementSibling.nextElementSibling

siblings are on the same level and share a parent
element and we also have 

const thirdLi = firstLi.nextElementSibling.nextElemebtSibling

thirdLi 
 result -  <li class="special">Third Thikng<li>
thirdLi.previousElementSibling
 result -  <li>Second Things</li>

We can find children, parents, or sibling (prev, next) elements


Changing Multiple Elements

const allLis = document.querySelectorAll('li');

for (let i = 0; i < allLis.length; i++) {
  console.log(allLis[i].innerText);
}

If we want to change them all we can set
their innerText

for (let i = 0; i < allLis.length; i++) {
  allLis[i].innerText = 'WE ARE THE CHAMPIONS!'
}

Now every single li has been updated by iterating
over the array like object

for (let li of allLi) {
  li.innerHTML = "WE ARE <b>THE CHAMPIONS</b>"
}

parsed and turned into a bold element on the page
on every single li 

we can also change styles, access all attributes 
and set all attributes

How do we manipulate CSS properties, by 
setting the CSS style properties 

h1.style
  CSSStyleDeclaration...

h1.style.color
""
nothing is there to show

if we are trying to use the style property 
to read existing style properties - we
wouldn't be able to unless it is styled
inline (which is not what we normally want to do)

h1.style.color = 'orchid'

it will change the color element inline style 
orchid 

const p = document.querySelector('p');
undefined
p.style.color = 'white';
"white"

in javascript property names are camel cased 
so background-color would be backgroundColor

p.style.backgroundCOlor = 'black'
"black" 

the change takes effect

we are adding inline styles to the element itself
but there is a better approach - lets say we
wanted to add 10 different styles all at once
to a specific element - reducing code

^^ not a good way to figure out what current
style is on an each element

const allLis = document.querySelector('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

allLis.forEach((li, i) => {
  const color = colors[i];
  li.style.color = color;
})

Why did these colors win out versus a class 
that has a particular style - because 
an inline style is added to an element 
and overtakes which applies to that element

document.querySelector('li')
  <li class="special">First Things</li>
document.querySelector('li').style.color
""
If we want to get that calculated or computed
value 

const li = document.querySelect('li');
undefined
const styles = getComputedStyle(li);

const styles = getComputedStyle(li);
undefined
styles

will give a CSSStyleDeclaration Object 
with all key value pairs and all possible
properties and current values that could
be changed

styles.color 
"rgb(255, 192, 203"
li.style.color = 'red'
"red"
styles.color
"rgb(255, 0, 0)"

so this object from getComputedStyles
will get this computed style

we could have a hover style for instance
with color purple 

const h1 = document.querySelector('h1');
undefined
const compStyles = getComputedStyle(h1);
undefined 
compStyles.color
"rgb(128, 0, 128)"
compStyles.fontSize
"60px"

compStyles.color
"rgb(255, 165, 0)"

compStyles.fontSize
"80px"

to know what is actually winning or taking 
precedence in the DOM 
you can use getComputedStyles

setAttribute automatically
takes the current value 
which is class and replaces
it with done which is not ideal

const todo = document.querySelector('#todos .todo')
todo.setAttribute('class', 'done');

but we can apply two classes

todo.setAttribute('class', 'todo done');

and that works, but we have to hard
code this in - if we have 5 classes
this would not be best approach 
so we can use classList which is a DOM token list

classList provides methods so we can do things
we have an add, contains, entries, forEach, toggle
method all for instance

if we want to make sure our todo list doesn't
have the done class we can use

todo.classList.remove('done');
undefined 
and now it will be gone which is a nicer improvement

or the opposite is true

todo.classList.add('done'); 

the most useful part may be to toggle a class

todo.classList.toggle('done');
true
todo.classList.toggle('done');
false

todo.getAttribute('class')
"todo"
todo.getAttribute('class').includes('done')
false
todo.setAttribute('class', todo.getAttribute('class') + 'done');

todo.getAttribute('class')
"todo done"
todo.getAttribute('class').includes('done')
true

if we use toggle it will remove it if its there
if it's not there it adds it and notice if it
it is true or false - when the class is added
in it's true and when removing it is fast

classList is great because we remove, add, and 
toggle classes all the time

writing a css class we have all our styles together
and only have to write it one time and include
in the actual css file and from javascript 
we can selectively apply and include that class
classList.toggle is the better approach unless
it's one specific element - but using multiple
or styling multiple elements the classList and
its methods are better way to do it

We can create elements 
using 

document.createElement('h2')
  <h2></h2>
makes an empty element for us

const newh2 = document.createElement('h2');
undefined
console.dir(newh2);

if we want to put content in that is a separate 
step: 

newh2.innerText = 'I like animals'
newh2
  <h2>I like animals!</h2>
newh2.classList.add('special')

<h2 class="special">I like animas!</h1>

How do we deliver the element onto the page
- we must select an element to append it to
to see it on the actual page using appendChild

if we want to append this newh2 or h2 and 
wanted to append to a parent element

const section - document.querySelector('section')
undefined
section.appendChild(newh2)

we are now connecting it into the DOM by saying 
append it to this section - it will go to the
end of the children or child elements

a new sibling is added!

const newImg = document.createElement('img')

console.dir(newImg) <--- also a new object
but an HTMLImageElement
we can set the source

newImage.src = 'https://wwww.fasfljksdfdsfjf'

nwqImf.style.width = "300px";

we can use <body> and call append child on the
body or put inside of the form

document.body.appendChild(newImg);

we fill in inner text and or classes when we
need to

const newLink = document.createElement('a');
newLink.innerText = 'Mr. Bubz. Video! CLICK MEEE'
newLink.href = 'https://flasdfkdflsdljfd'
const firstP = document.querySelector('p');
firstP.appendChild(newLink);

we can create elements of any different types, 
append other elements into each element
add content like text or images

const parentUL = document.querySelector('ul')
undefined
parentUL
const newLI = document.createElement('li')
newLI.innerText = 'I AM A NEW LI!';
parentUL.appendChild(newLI)

what if we want to make a new top to do or 
if we want it to go in the middle of child
element list

const firstLI = document.querySelector('li.todo');
parentUL.insertBefore(newLI, fistLI)

must have parent, insert before, what inserting, 
and where we are inserting

const lastToDo = document.querySelectorAll('li.todo')[2];
parentUL.insertBefore(newLI, lastTodo)

We can use insert json element 

<!--- beforebegin --->
<p>
  <!-- afterbegin --> 
  foo
  <!-- beforeend -->
</p>
  <!-- afterend -->

const i = document.createElement('i')
i.innerText = "I am italics!!!"
const firstP = document.querySelector('p')
fistP.insertAdjacentElement('beforebegin', i)
above we are inserting before the paragraph
fistP.inserAdjacentElement('afterend', i)
after the paragraph ends
firstP.insertAdjacentElement('afterbegin', i)
firstP.insertadjacentElement('afterend', i)

If we want to insert two elements into a paragraph

firstP.append(i,newLI) and now both appended inside 
this paragraph 

firstP.prepend(i, newLI) will be a child of the paragraph
but go to the beginning of the paragraph

with appendChild you can not insert multiple elements
but can insert one element but the li is never added
append and prepend doesn't work within IE

remove & removeChild 

append() - doesn't work in internet explorer 

remove() - doesn't work in internet explorer

Lets say we want to remove parapgraphs or p tags

const ul = document.querySelector('section ul')
const removeMe = ul.querySelector('.special'); - only one element with class of special
ul.removeChild(removeMe)
--- remove Me must be child of the parent
--- does return the deleted item 

cibst h1 - document.querySelector('h1')
h1.remove()

can use this in a loop to remove a bunch of
things you wnat to remove




*/
