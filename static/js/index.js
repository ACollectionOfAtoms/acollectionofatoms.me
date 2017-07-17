var listHeaderBaseClassName = 'contact-info-aside__header';
var mainHeaderBaseClassName = 'header';

var meaninglessCircleEffect = function() {
  var circle = document.getElementById('js-meaningless-circle');
  var tooltip = document.getElementById('js-meaningless-tool-tip');
  var button = document.getElementsByClassName('meaningless-button')[0];
  function toggleToolTip() {
    circle.classList.toggle('meaningless-circle_active');
    tooltip.classList.toggle('meaningless-tool-tip_active');
    button.classList.toggle('meaningless-button_active');
  };
  circle.addEventListener("click", function() {
    toggleToolTip();
  });
  button.addEventListener("click", function() {
    toggleToolTip();
  })
}

meaninglessCircleEffect();
var animateHeader = function (wordArray) {
  var headerLabelArray = ['a ', 'collection ', 'of ', 'atoms'];
  var mainHeaderEl = document.getElementsByClassName(mainHeaderBaseClassName)[0];
  headerLabelArray.forEach(function(word) {
    var wordSpan = document.createElement('span');
    wordSpan.className = 'black-on-hover';
    wordSpan.innerHTML = word;
    mainHeaderEl.appendChild(wordSpan);
  });
  var moreWords = [' made ', 'this ', 'for ', 'you.'];
  moreWords.forEach(function(word) {
    var span = document.createElement('span');
    span.className = 'ghost-text';
    span.innerHTML = word;
    mainHeaderEl.appendChild(span);
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
  var atom = document.getElementById('js-atom');
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
var showMeaninglessCircle = function(time) {
  var circle = document.getElementsByClassName('meaningless-circle')[0];
  setTimeout(function() {
    circle.classList.toggle('meaningless-circle_visble');
  }, time);
}

sayHi(2000);
showMeaninglessCircle(2000);
resetListHeader();
attachAtomIconListener();
attachListItemListeners();
animateHeader();
