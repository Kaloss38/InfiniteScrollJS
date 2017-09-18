var listElm = document.querySelector('#infinite-list');

// Add 20 items.
var nextItem = 1;

//Loading function
var loadMore = function() {
  for (var i = 0; i < 20; i++) {
    var item = document.createElement('li'); //Create li section in html
    item.innerText = 'Item ' + nextItem++; //Add item + increment in item li
    listElm.appendChild(item); // Add item in ul
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) { //scrollTop: Définit ou obtient le nombre de pixels dont le contenu de l'élément a défilé vers le haut
    loadMore();															  //clientHeight: Get the height of ul element	
  }																		  //scrollHeight: obtiens la hauteur du contenu	
});

// Initially load some items.
loadMore();