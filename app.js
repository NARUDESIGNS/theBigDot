//RESOURCES
const clock = document.getElementById('clock');
const clockFrame = document.getElementById('clock-frame');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const minuteContainer = document.getElementById('minute-container');
const secondContainer = document.getElementById('second-container');
const chooseColor = document.getElementById('choose-color');
const pickColor = document.getElementById('pick-color');
const dim = document.getElementById('dim');
const frame = document.getElementById('use-frame');
const colors = document.getElementsByClassName('colors');

//CLOCK LOGIC
setInterval( () => {
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let degSecs = 6 * sec;
    let degMins = 6 * min;

    secondContainer.style.transform = `rotate(${degSecs}deg)`;
    minuteContainer.style.transform = `rotate(${degMins}deg)`;
    minute.style.transform = `rotate(${-degMins}deg)`;
    if(hr == "0") hr = 12; //when time is 00hrs, display 12
    hour.innerText = `${hr > 12 ? hr - 12 : hr}`;
    
    minute.firstElementChild.innerText = min;
    minute.firstElementChild.innerText = `${minute.firstElementChild.innerText < 10 ? '0' : ''}${minute.firstElementChild.innerText}`;
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

//change color function
function changeColor(mainColor, fillColor){
    clockFrame.style.background = mainColor;
    minute.style.backgroundColor = fillColor;
    second.style.borderColor = fillColor;
    hour.style.color = fillColor;
    chooseColor.style.background = mainColor;
}

//colors
for(let color of colors){
    color.addEventListener('click', () => {
        if(color.id == 'green') changeColor('var(--green-gradient)', '#32d656');
        if(color.id == 'orange') changeColor('var(--orange-gradient)', '#e89446');
        if(color.id == 'pink') changeColor('var(--pink-gradient)', '#ca5386');
        if(color.id == 'purple') changeColor('var(--purple-gradient)', '#ce8b53');
        if(color.id == 'grey') changeColor('var(--grey-gradient)', '#c0bdbd');
        if(color.id == 'blue') changeColor('var(--blue-gradient)', '#5e81f4');
        dim.style.display = "none";
        pickColor.style.display = "none";
    })
}