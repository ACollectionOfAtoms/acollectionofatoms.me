var listHeaderBaseClassName = 'contact-info-aside__header';
var mainHeaderBaseClassName = 'header';

var animateHeader = function (wordArray) {
  var headerLabelArray = ['a ', 'collection ', 'of ', 'atoms'];
  var mainHeaderEl = document.getElementsByClassName(mainHeaderBaseClassName)[0];
  headerLabelArray.forEach(function(word) {
    var wordSpan = document.createElement('span');
    wordSpan.className = 'black-on-hover';
    wordSpan.innerHTML = word;
    mainHeaderEl.appendChild(wordSpan);
  });
};

var setListHeader = function(string) {
  var listHeader = document.getElementsByClassName(listHeaderBaseClassName)[0];
  listHeader.innerHTML = string;
};

var resetListHeader = function() {
  setListHeader('contact');
}

var toggleListHeaderFaClasses = function(el) {
  var listHeader = document.getElementsByClassName(listHeaderBaseClassName)[0];
  var faClasses = el.dataset.faIconClasses.split(' ');
  listHeader.classList.toggle('black-text');
  listHeader.classList.toggle(faClasses[0]);
  listHeader.classList.toggle(faClasses[1]);
};

var attachListItemListeners = function () {
  var contactListHTMLCollection = document.getElementsByClassName('contact-info-aside__list-item');
  var contactListItemArray = [].slice.call(contactListHTMLCollection);
  contactListItemArray.forEach(function(el) {
    el.addEventListener("mouseenter", function() {
      setListHeader('');
      toggleListHeaderFaClasses(el);
    });
    el.addEventListener("mouseleave", function() {
      resetListHeader();
      toggleListHeaderFaClasses(el);
    });
  });
};

var attachAtomIconListener = function () {
  var atom = document.getElementById('special-atom');
  var listHeader = document.getElementsByClassName(listHeaderBaseClassName)[0];
  atom.addEventListener("mouseenter", function() {
    listHeader.classList.toggle('black-text');
    setListHeader('???');
  });
  atom.addEventListener("mouseleave", function() {
    listHeader.classList.toggle('black-text');
    resetListHeader();
  });
};

var sayHi = function(time) {
  setTimeout(function() {
    var hiLetters = document.getElementsByClassName('hi-letter');
    var letterArray = [].slice.call(hiLetters);
    letterArray.forEach(function(el) {
      el.classList.toggle('black-text');
    });
  }, time);
}

sayHi(2000);
resetListHeader();
attachAtomIconListener();
attachListItemListeners();
animateHeader();
