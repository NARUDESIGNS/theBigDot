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

//colors
for(let color of colors){
    color.addEventListener('click', () => {
        if(color.id == 'green') document.documentElement.style.setProperty('--color-fill', '#98c5a7');
        if(color.id == 'orange') document.documentElement.style.setProperty('--color-fill', '#f0b863');
        if(color.id == 'pink') document.documentElement.style.setProperty('--color-fill', '#ca8b98');
        if(color.id == 'brown') document.documentElement.style.setProperty('--color-fill', '#ffc31f');
        if(color.id == 'grey') document.documentElement.style.setProperty('--color-fill', '#929292');
        if(color.id == 'blue') document.documentElement.style.setProperty('--color-fill', '#80b7ff');
        dim.style.display = "none";
        pickColor.style.display = "none";
    })
}