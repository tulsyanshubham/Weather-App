const submitbtn = document.querySelector('#submitbtn');
const locationscope = document.querySelector('#locationscope');
const cityinput = document.querySelector('#cityinput');
const date = document.querySelector('#date');
const temp = document.querySelector('#temp');
const weathercon = document.querySelector('#weathercon');
const maxmin = document.querySelector('#maxmin');

const getdata = async (e) => {
    e.preventDefault();
    // const city = cityinput.
    let city = cityinput.value;
    if (city === "") {
        locationscope.innerText = "Please Enter a City Name";
    } else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3b213fc262cc90bf99dae6ec45854075`;
            const res = await fetch(url);
            const data = await res.json();
            const arrchunk = [data];
            temp.innerHTML = `${arrchunk[0].main.temp}&deg;C`;
            maxmin.innerHTML = `Min ${arrchunk[0].main.temp_min}&deg;C | Max ${arrchunk[0].main.temp_max}&deg;C`;

            // console.log(arrchunk[0].main.temp)
            // const parsedata = await JSON.parse(res);
            // console.log(parsedata);
        }
        catch {
            locationscope.innerText = "Please Enter a Vaild City Name";
            console.log(city)
        }
    }
}

submitbtn, addEventListener('click', getdata)