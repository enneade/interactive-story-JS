var btn_start = document.querySelector('.StartGame_button');
var galaxy_textTime = document.querySelector('.Galaxy_textTime span');
var btn_notReady = document.querySelector('.DescriptionButtons_buttons_notReady');
var btn_ready = document.querySelector('.DescriptionButtons_buttons_ready');
var btn_sureNotTry = document.querySelector('.ChangeOpenion_items_buttons_sure');
var btn_try = document.querySelector('.ChangeOpenion_items_buttons_try');
var profile_pictureOne = document.querySelector('.Profile_items_pictureOne');
var profile_pictureTwo = document.querySelector('.Profile_items_pictureTwo');
var input_pseudo = document.querySelector('.Profile_items_inputsGo_choosePseudo');
var submit_profile = document.querySelector('.Profile_items_inputsGo_submitGo');
var btn_returnHome = document.querySelector('.GoodBye_items_butonReturn');
var btn_submit = document.querySelector('#submit_pseudo');
var form = document.querySelector('form');
var input = document.querySelector('#input');
var messageChatOne = document.querySelector('.Chat_messages_one');
var messageChatTwo = document.querySelector('.Chat_messages_two');

var counterTime = galaxy_textTime.textContent;

var startGame_container = document.querySelector('.StartGameContainer');
var galaxy_container = document.querySelector('.GalaxyContainer');
var description_container = document.querySelector('.DescriptionContainer');
var changeOpenion_container = document.querySelector('.ChangeOpenionContainer');
var profile_container = document.querySelector('.ProfileContainer');
var goodBye_container = document.querySelector('.GoodByeContainer');
var chat_container = document.querySelector('.ChatContainer');
var text_chatOne = document.querySelector('.Chat_messages_one_text');
var text_chatTwo = document.querySelector('.Chat_messages_two_text');
var currentDiv = document.querySelector("#div1");
var currentDiv2 = document.querySelector("#div2");
var messageCurrentDiv = document.querySelector('#message');

var timer;


var messages = [
 {
  "textOne" : "Bonjour Obiwan<br>Désolée, tu n’es pas  <br>mon style d’homme, je <br>préfère les hommes <br> plus…poilus.<br>",
  "textTwo" : "Gimmikiss vous a <br>  nexté, voulez vous <br>réessayer ? Faites le <br> bon choix cette fois."
  }
];
var pickUP = messages[0].textOne;
var p = messages[0].textTwo;

var dataBetween = [
  {
  "textOne"  : "Bonjour Chui <br> Tu es très mignon!!",
  "textTwo" : "Si moi je suis mignon toi tu es <br> sublime, il n’y a pas de beauté comme <br> toi dans toute la galaxie",
  "textThree" : "Merci toi aussi, tu as de <br> beaux… astéroïdes….",
  }
];
var a = dataBetween[0].textOne;
var b = dataBetween[0].textTwo;
var c = dataBetween[0].textThree;

 // function addElement() {
 // var newDiv = document.createElement("div");
 // var newContent = document.createTextNode(pickUP);
 // newDiv.appendChild(newContent);
 // // var currentDiv = document.getElementById("div1");
 // // document.body.insertBefore(newDiv, currentDiv);
 // }





// function animationText(items) {
//   items.style.animationName = "fadeIn";
//   items.style.animationDelay = "1s";
//   items.style.animationDuration = "3s";
//   items.style.animationFillMode = "both";
//   items.style.@keyframes = fadeIn = "0% " + "{opacity: 0;}";
//   items.style.@keyframes = fadeIn ="100%" + "{opacity: 1;}";
//   }
// }


btn_start.addEventListener('click', function(){
  galaxy_container.classList.add('is-active');
  startGame_container.remove('is-active');
  function startTime(){
    if (counterTime > 0) {
      counterTime--;
      galaxy_textTime.textContent = counterTime;
    }else{
      console.log('startTime')
      description_container.classList.add('is-active');
      galaxy_container.classList.remove('is-active');
      clearInterval(timer);
      return;
    }
  }
  clearInterval(timer);
  timer = setInterval(startTime, 1000);
  console.log('hiii');
});

btn_notReady.addEventListener('click', function() {
  changeOpenion_container.classList.add('is-active');
  description_container.classList.remove('is-active');
  console.log('hello');
});
btn_ready.addEventListener('click', function() {
  profile_container.classList.add('is-active');
  description_container.classList.remove('is-active');
  console.log('hello how  are you');
});

btn_sureNotTry.addEventListener('click', function () {
  goodBye_container.classList.add('is-active');
  changeOpenion_container.classList.remove('is-active');
});
btn_try.addEventListener('click', function () {
  profile_container.classList.add('is-active');
  changeOpenion_container.classList.remove('is-active');
});
btn_returnHome.addEventListener('click', function () {
  startGame_container.add('is-active');
  startGame_container.classList.add('is-active');
  console.log('yoo');
});

// UNE FONCTION QUI SERT A ENLEVER LE STYLE AUX IMAGES
function addStyle(element) {
  element.style.border = "3px solid #FFE81F";
  element.style.boxShadow = "inset 0 0 1em gold, 0 0 2em #FFE81F";
  element.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
}

// UNE FONCTION QUI SERT A AJOUTER LE STYLE AUX IMAGES
function removeStyle(element) {
  element.style.border = '';
  element.style.boxShadow = '';
  element.style.backgroundColor = '';
}

// LES EVENEMENTS SUR LES PHOTOS DE PROFILS

profile_pictureOne.addEventListener('click', function () {
  addStyle(profile_pictureOne);
  removeStyle(profile_pictureTwo);
});

profile_pictureTwo.addEventListener('click', function () {
  addStyle(  profile_pictureTwo);
  removeStyle(profile_pictureOne);
  });

// BUTTON submit
profile_pictureOne.addEventListener('click', function () {
  btn_submit.addEventListener('click', function(event) {
    event.preventDefault();
    var value = input.value;
    if (value === '') {
      return;
    }else {
      chat_container.classList.add('is-active');
      profile_container.classList.remove('is-active');
      currentDiv.innerHTML = a;
      text_chatOne.innerHTML = b;
      text_chatTwo.innerHTML = c;
    }
    });
});

profile_pictureTwo.addEventListener('click', function () {
  btn_submit.addEventListener('click', function(event) {
    event.preventDefault();
    var value = input.value;
    if (value === '') {
      return;
    }else {
      chat_container.classList.add('is-active');
      profile_container.classList.remove('is-active');
      currentDiv.innerHTML = pickUP;
      currentDiv2.innerHTML = p;
      text_chatOne.innerHTML = "Oui";
      text_chatTwo.innerHTML = "Non";
    }
    });
});
