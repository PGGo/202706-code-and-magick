'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// для отображения разных магов
var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// для открытия попапа
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');

// изменение вида волшебника
var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardEyes = userDialog.querySelector('.wizard-eyes');
var fireballWrap = userDialog.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  // клавиша esc
  var setupUserName = userDialog.querySelector('.setup-user-name');
  if (evt.keyCode === 27 && (document.activeElement !== setupUserName)) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// открытие по клику по аватарке
setupOpen.addEventListener('click', function () {
  openPopup();
});

// открытие по клавише ent по аватарке
setupOpen.addEventListener('keydown', function (evt) {
  // клавиша enter
  if (evt.keyCode === 13) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomWizardParameter(WIZARD_COAT_COLORS);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomWizardParameter(WIZARD_EYES_COLORS);
});

fireballWrap.addEventListener('click', function () {
  fireballWrap.style.background = getRandomWizardParameter(FIREBALL_COLORS);
});


var randomInteger = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

var getRandomWizardParameter = function (parameter) {
  var randomParameter = parameter[randomInteger(0, parameter.length - 1)];
  return randomParameter;
};

var wizards = [];

for (var i = 0; i <= 3; i++) {
  var wizardItem = {
    name: getRandomWizardParameter(WIZARD_NAMES) + ' ' + getRandomWizardParameter(WIZARD_SURNAMES),
    coatColor: getRandomWizardParameter(WIZARD_COAT_COLORS),
    eyesColor: getRandomWizardParameter(WIZARD_EYES_COLORS)
  };

  wizards[i] = wizardItem;
}

var createWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(createWizardElement(wizards[j]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
