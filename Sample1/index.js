document // contains element tree
document.body
document.body.innerHTML
document.body.innerText

document.location

document.all // element list on the page


document.body.firstElementChild
document.body.firstChild // !!! 

document.body.firstElementChild.firstElementChild.nextElementSibling

document.body.firstElementChild.firstElementChild.nodeType

document.nodeType // 9

document.body.children



var d = document.createElement('div');
document.body.append(d);

document.body.lastElementChild

document.body.removeChild(document.body.lastElementChild);

document.body.firstElementChild.cloneNode();
document.body.firstElementChild.cloneNode(true);

document.body.append(document.body.firstElementChild(true));

document.querySelector('h1')
document.querySelectorAll('h1') // return node list

document.getElementById('firstdiv');
document.getElementById('firstdiv').innerText = 'sdf';

document.getElementsByClassName('wrapper')

document.querySelector('#firstdiv + div');

document.querySelector('#firstdiv').addEventListener('click', () => { console.log('Hello') })


$(0).innerText = 'sdfgsdf';



