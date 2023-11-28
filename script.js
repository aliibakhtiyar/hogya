let images_dt = [
    {
        title : "THE CHICKEN <br> BURGER",
        price : "349",
        MRP : "399",
        calorie : 7845,
        fat : 98 ,
        protein : 112
    },
    {
        title : "FRENCH <br> FRIES",
        price : "$18.90",
        MRP : "$38",
        calorie : 4512,
        fat : 65,
        protein : 78
    },
    {
        title : "THE BLACK <br> BURGER",
        price : "$10.90",
        MRP : "$18",
        calorie : 6545,
        fat : 115 ,
        protein : 56
    },
    {
        title : "THE RED <br> BURGER",
        price : "$11.90",
        MRP : "$20",
        calorie : 9845,
        fat : 68 ,
        protein : 86
    },
    {
        title : "THE GREEN <br> BURGER",
        price : "$13.90",
        MRP : "$26",
        calorie : 1256,
        fat : 45 ,
        protein : 123
    },
    {
        title : "THE TORNADO <br> BURGER",
        price : "$18.90",
        MRP : "$38",
        calorie : 5678,
        fat : 92 ,
        protein : 99
    },
    {
        title : "THE COMBO <br> BURGER",
        price : "$9.90",
        MRP : "$17",
        calorie : 3245,
        fat : 49,
        protein : 78
    },
]


let index = 0;
let len = Array.from(document.getElementsByClassName('main_imgs')).length * 310;
let images_off = () => {
    Array.from(document.getElementsByClassName('main_imgs')).forEach((el) => {
        el.style.width = "35%"; 
        el.style.filter = "blur(1.5px)"; 
    })
}
let icon_off = () => {
    Array.from(document.getElementsByClassName('pagi_img')).forEach((el) => {
        el.style.transform = "unset"; 
        el.style.opacity = ".3"; 
    })
}

document.getElementsByClassName('bi-chevron-right')[0].addEventListener('click', () => {
    index +=  310;
    if (index > (len)-310 ) {
        index = (len)-310;
    }
    document.getElementsByClassName('images')[0].scrollLeft = index;
    images_off();
    console.log(index)
    document.getElementsByClassName('main_imgs')[index/310].style.width = "60%";
    document.getElementsByClassName('main_imgs')[index/310].style.filter = "blur(0px)"; 
    document.getElementsByClassName('title')[0].innerHTML = images_dt[(index/310)].title;
    document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;
    document.getElementById('calorie').innerText = images_dt[(index/310)].calorie;
    document.getElementById('fat').innerText = images_dt[(index/310)].fat;
    document.getElementById('protien').innerText = images_dt[(index/310)].protein;
    icon_off();
    document.getElementsByClassName('pagi_img')[(index/310)].style.transform = "scale(1.1)"
    document.getElementsByClassName('pagi_img')[(index/310)].style.opacity = 1;
})


document.getElementsByClassName('bi-chevron-left')[0].addEventListener('click', () => {
    index -=  310;
    if (index < 0) {
        index = 0;
    }
    document.getElementsByClassName('images')[0].scrollLeft = index;
    images_off();
    console.log(index)
    document.getElementsByClassName('main_imgs')[index/310].style.width = "60%";
    document.getElementsByClassName('main_imgs')[index/310].style.filter = "blur(0px)"; 
    document.getElementsByClassName('title')[0].innerHTML = images_dt[(index/310)].title;
    document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;
    document.getElementById('calorie').innerText = images_dt[(index/310)].calorie;
    document.getElementById('fat').innerText = images_dt[(index/310)].fat;
    document.getElementById('protien').innerText = images_dt[(index/310)].protein;
    icon_off();
    document.getElementsByClassName('pagi_img')[(index/310)].style.transform = "scale(1.1)"
    document.getElementsByClassName('pagi_img')[(index/310)].style.opacity = 1;
})

Array.from(document.getElementsByClassName('pagi_img')).forEach((el , i) => {
    el.addEventListener('click', ()=> {

        index  = 310 * i;

        document.getElementsByClassName('images')[0].scrollLeft = index;
        images_off();
        console.log(index)
        document.getElementsByClassName('main_imgs')[index/310].style.width = "60%";
        document.getElementsByClassName('main_imgs')[index/310].style.filter = "blur(0px)"; 
        document.getElementsByClassName('title')[0].innerHTML = images_dt[(index/310)].title;
        document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;
        document.getElementById('calorie').innerText = images_dt[(index/310)].calorie;
        document.getElementById('fat').innerText = images_dt[(index/310)].fat;
        document.getElementById('protien').innerText = images_dt[(index/310)].protein;
        icon_off();
        document.getElementsByClassName('pagi_img')[(index/310)].style.transform = "scale(1.1)"
        document.getElementsByClassName('pagi_img')[(index/310)].style.opacity = 1;
    });
})
function loader(){
     document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader, 3000);
}
window.onload = fadeOut();
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);



const page =document.querySelector('.page');
const loginLink =document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');
const btnPopup =document.querySelector('.btnLogin-popup');
const iconClose =document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    page.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    page.classList.remove('active');
});
btnPopup.addEventListener('click', ()=> {
    page.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
    page.classList.remove('active-popup');
});
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = "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"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));





var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}
function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
