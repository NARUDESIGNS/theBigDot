//RESOURCES
const logo = document.getElementById('logo');
const themeBtn = document.getElementById('theme-btn');
const overallContainer = document.getElementById('overall-container');
const clockFrame = document.getElementById('clock-frame');
const clock = document.getElementById('clock');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const minuteContainer = document.getElementById('minute-container');
const overallMinuteContainer = document.getElementById('overall-minute-container');
const secondContainer = document.getElementById('second-container');
const secondIndicator = document.getElementById('second-indicator');
const chooseColor = document.getElementById('choose-color');
const pickColor = document.getElementById('pick-color');
const dim = document.getElementById('dim');
const colors = document.getElementsByClassName('colors');
const dateContainer = document.getElementById('date-container');
const date = document.getElementById('date');

//document.documentElement.style.setProperty('--touch-color', 'lime');

//CLOCK LOGIC
setInterval( () => {
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    // rotation calculation variables
    let degSecs = 6 * sec;
    let degMins = 6 * min;

    // rotation calculation
    secondContainer.style.transform = `rotate(${degSecs}deg)`;
    overallMinuteContainer.style.transform = `rotate(${degMins}deg)`;
    minuteContainer.style.transform = `rotate(${-degMins}deg)`;
    if(hr == "0") hr = 12; //when time is 00hrs, display 12
    hour.innerText = `${hr > 12 ? hr - 12 : hr}`;
    
    minuteContainer.firstElementChild.innerText = min;
    minute.innerText = `${minute.innerText < 10 ? '0' : ''}${minute.innerText}`;
}, 100);

//choose color button
chooseColor.addEventListener('click', () => {
    dim.style.display = "block";
    pickColor.style.display = "flex";
    dim.addEventListener('click', () => { //hide view when user clicks on body background
        dim.style.display = "none";
        pickColor.style.display = "none";
    })
})

//colors
for(let color of colors){
    color.addEventListener('click', () => {
        if(color.id == 'green') document.documentElement.style.setProperty('--text-color', '#98c5a7');
        if(color.id == 'orange') document.documentElement.style.setProperty('--text-color', '#f0b863');
        if(color.id == 'pink') document.documentElement.style.setProperty('--text-color', '#ca8b98');
        if(color.id == 'brown') document.documentElement.style.setProperty('--text-color', '#a0886c');
        if(color.id == 'grey') document.documentElement.style.setProperty('--text-color', '#929292');
        if(color.id == 'purple') document.documentElement.style.setProperty('--text-color', '#8364ac');
        dim.style.display = "none";
        pickColor.style.display = "none";
    })
}

//set date
date.innerText = new Date().toDateString();

//light / dark mode toggle
let lightMode = true;
themeBtn.addEventListener('click', ()=> {
    //toggle light / dark icons
    themeBtn.firstElementChild.classList.toggle('hidden');    
    themeBtn.lastElementChild.classList.toggle('hidden'); 

    if(lightMode){
        themeBtn.style.backgroundColor = 'var(--dark-bg-fill)';
        pickColor.style.backgroundColor = 'var(--dark-bg-fill)';

        //set dark logo and background color 
        logo.style.color = 'var(--dark-logo)';
        overallContainer.style.backgroundColor = 'var(--dark-bg)';

        //set clock elements colors | set date background and choose-color button text colors
        clockFrame.style.backgroundColor = 'var(--dark-bg)';
        clock.style.backgroundColor = 'var(--dark-bg)';
        minute.style.color = 'var(--dark-bg)';
        secondIndicator.style.borderColor = 'var(--dark-bg)';
        dateContainer.style.backgroundColor = 'var(--dark-bg-fill)';
        chooseColor.style.color = 'var(--dark-bg)';

        //turn off frame shadow | modify clock shadow
        clockFrame.style.boxShadow = 'none';
        clock.style.boxShadow = '0 0 60px rgba(204, 204, 204, 0.5)';

        lightMode = !lightMode;
    }
    else {
        themeBtn.style.backgroundColor = 'var(--light-bg-fill)';
        pickColor.style.backgroundColor = 'var(--light-bg-fill)';

        //set dark logo and background color 
        logo.style.color = 'var(--light-logo)';
        overallContainer.style.backgroundColor = 'var(--light-bg)';

        //set clock elements colors | set date background and choose-color button text colors
        clockFrame.style.backgroundColor = 'white';
        clock.style.backgroundColor = 'white';
        minute.style.color = 'white';
        secondIndicator.style.borderColor = 'white';
        dateContainer.style.backgroundColor = 'var(--light-bg-fill)';
        chooseColor.style.color = 'white';

        clock.style.boxShadow = '0 0 60px rgba(204, 204, 204, 0.8)';

        lightMode = !lightMode;
    }
})