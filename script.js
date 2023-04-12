////// Make Main Menu to Stick to top of page on scroll /////
window.onscroll = function () {
  mainMenuOnScroll();
};
// DOM Element
var mainmenu = document.getElementById("mainmenu");
// Offset position of the navbar
var offsetPosition = mainmenu.offsetTop;
// Function to add/remove the sticky class defined in style.css
function mainMenuOnScroll() {
  if (window.pageYOffset > offsetPosition) {
    mainmenu.classList.add("sticky");
  } else {
    mainmenu.classList.remove("sticky");
  }
}

/////////////// Header language change //////////////////////
let text = document.querySelector("header");
let control = 1;
text.onmouseover = function () {
  if (control === 1) {
    changeLangOnHover();
  }
};
function changeLangOnHover() {
  let headings = document.getElementsByClassName("header-text");
  if (headings[0].innerHTML === "தமிழ் சங்கம் IITH") {
    headings[0].innerHTML = "Thamizh Sangam IITH";
  } else {
    headings[0].innerHTML = "தமிழ் சங்கம் IITH";
  }
  control = 0;
  setTimeout(allowControl, 1000);
}
function allowControl() {
  control = 1;
}

////////////// About us Language Change /////////////////////
function changeToEng() {
  const about_us = document.querySelector(".centering-about-us");
  about_us.innerHTML = "";
  about_us.insertAdjacentHTML(
    "beforeend",
    `
    <div class="about-us-heading">
            <p>About Us</p>
            <button class="choice தமிழ்" onclick="changeToTam()">
            தமிழ்
            </button>
          </div>

          <div class="page-content page-content-eng">
            <p>
            Welcome to the website of the INDIAN INSTITUTE OF TECHNOLOGY – HYDERABAD SENTHAMIZH SANGAM. This Sangam offers a platform for those who are interested in Tamil language and culture and also acts as a forum for the Tamil community at IITH. The Sangam is the result of efforts by Tamil students who have been a part of IITH since its beginning in 2008. It took its present form on April 14, 2014, with the celebration of the Tamil New Year, bringing together faculty, staff, scholars, and students. 
            Senthamizh Sangam hopes to:
            </p>
            <ul>
              <li>
              Be a supportive platform for the Tamil students and alumni of IITH. 
              </li>
              <li>
              Encourage and enrich the learning of Tamil language. 
              </li>
              <li>
              Celebrate cultural festivals and open avenues for inter-cultural exchange. 
              </li>
              <li>
              Create informative tools for education in Tamil. 
              
              </li>
            </ul>
            <p>
            This website is envisaged as a space to digitize, share, and promote our activities.
            </p>
          </div>
    `
  );
}

function changeToTam() {
  const about_us = document.querySelector(".centering-about-us");
  about_us.innerHTML = "";
  about_us.insertAdjacentHTML(
    "beforeend",
    `
    <div class="about-us-heading">
            <p>எங்களை பற்றி</p>
            <button class="choice தமிழ்" onclick="changeToEng()">
              English
            </button>
          </div>

          <div class="page-content">
            <p>
              இந்திய தொழில்நுட்ப கழகம் - ஐதராபாத் செந்தமிழ் சங்கம்
              இணையதளத்திற்கு உங்களை வரவேற்கிறோம். இச்சங்கமானது தமிழ் மொழி
              மற்றும் தமிழ் கலாச்சாரத்தின் மீது ஆர்வமுள்ள தமிழ் மாணவர்களுக்கு
              ஒரு சிறந்த தளமாக அமைகிறது. இந்திய தொழில்நுட்ப கழகம் - ஐதராபாத்
              தொடங்கிய நாள் முதல் இன்று வரை பயிலும் அனைத்து தமிழ் மாணவர்களின்
              கூட்டு முயற்சியால் இச்சங்கம் உருவாகி உள்ளது. சித்திரை திங்கள்
              முதல் நாள், திருவள்ளுவர் வருடம் 2046 இல் இந்திய தொழில்நுட்ப கழகம்
              - ஐதராபாத் செந்தமிழ் சங்கம் செயல்வடிவம் பெற்றது. செந்தமிழ் சங்கம்
              தொலைநோக்குவது யாதெனில்:
            </p>
            <ul>
              <li>
                இந்திய தொழில்நுட்ப கழகம் - ஐதராபாத்தில் பயிலும் பல்வேறு துறை
                சார்ந்த தமிழ் மாணவர்கள், தமிழ் பேராசிரியர்கள் மற்றும் முன்னால்
                தமிழ் மாணவர்களுக்கு இடையே ஒரு நல்ல உறவு பாலம் அமைய வழிவகை
                செய்யும்.
              </li>
              <li>
                தமிழ் மாணவர்களிடையே செந்தமிழ் மொழியின் எழுத்து மற்றும் சொல் வளம்
                மேம்பட பாதை வகுக்கும்.
              </li>
              <li>
                தமிழ் மாணவர்களிடையே செந்தமிழ் மொழியின் எழுத்து மற்றும் சொல் வளம்
                மேம்பட பாதை வகுக்கும்.
              </li>
              <li>
                அறிவியல் தமிழ் முன்னேற்றத்திற்கு ஒரு சுடர்விளக்காய் அமையும்.
                இந்த இணையதளத்தின் நோக்கமானது தமிழ் மாணவர்களின் சிறந்த தமிழ்
                படைப்புகளை உலகறிய செய்வதும், உலகின் மற்ற பகுதிகளில் வாழும்
                அனைத்து தமிழ் மக்களின் அறிய பல சாதனைகளை தெரிந்து கொள்வதற்கும்,
                செந்தமிழ் சங்கத்தின் நிகழ்வுகளை தெரியப்படுவதற்கும், மற்ற தமிழ்
                சங்கங்களோடு ஒரு நல்ல உறவு வைத்துகொள்வதற்கும் உதவியாக அமையும்.
              </li>
            </ul>
          </div>
        </div>
    `
  );
}
