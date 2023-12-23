const submitbtn = document.querySelector('#submitbtn');
const locationscope = document.querySelector('#locationscope');
const cityinput = document.querySelector('#cityinput');
const datebox = document.querySelector('#date');
const temp = document.querySelector('#temp');
const weathericon = document.querySelector('#weathericon');
const maxmin = document.querySelector('#maxmin');

const getdata = async (e) => {
    e.preventDefault();
    // const city = cityinput.
    let city = cityinput.value;
    city = city.trim();
    if (city === "") {
        locationscope.innerText = "Please Enter a City Name";
    } else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3b213fc262cc90bf99dae6ec45854075`;
            const res = await fetch(url);
            const data = await res.json();
            const arrchunk = [data];
            locationscope.innerText = `${arrchunk[0].name}, ${arrchunk[0].sys.country}`
            temp.innerHTML = `${arrchunk[0].main.temp}&deg;C`;
            maxmin.innerHTML = `Min: ${arrchunk[0].main.temp_min}&deg;C &#160;|&#160; Max: ${arrchunk[0].main.temp_max}&deg;C`;
            weathericon.innerHTML = changeicon(arrchunk[0].weather.main);
        }
        catch {
            locationscope.innerText = "Please Enter a Vaild City Name";
            console.log(city)
        }
    }
}

const getCurrentTimeAndDay = () => {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    var now = new Date();
    var month = months[now.getMonth()]; // Access months array correctly
    var date = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();

    let periods = "AM";

    if (hours > 11) {
        periods = "PM";
        if (hours > 12)
            hours -= 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    const day = getCurrentDay();
    return `${day} | ${month} ${date} | ${hours}:${mins}${periods}`;
};

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue"; // Change to "Tue" for Tuesday
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
};

const changeicon = (tempStatus) => {
    if (tempStatus == "Sunny") {
        return "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
    } else if (tempStatus == "Clouds") {
        return "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
    } else if (tempStatus == "Rainy") {
        return "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
    } else {
        return "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
    }
}

datebox.innerHTML = getCurrentTimeAndDay();

submitbtn.addEventListener('click', getdata)