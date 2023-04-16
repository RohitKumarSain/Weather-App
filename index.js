let locationStr = window.location.search.split("?")[1].split("=")[1];
locationStr=locationStr.replace("+"," ");

const weather = (location) => {
    
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`;

    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'apikey',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => showData(json));
        
    let loc = document.getElementById("location");
    loc.innerHTML = location;
}

weather(locationStr)

function showData(data){
    let temp = document.getElementById("temp");
    let feels_like= document.getElementById("feels_like");
    let humidity = document.getElementById("humidity");
    temp.innerHTML = data.temp;
    feels_like.innerHTML = data.feels_like;
    humidity.innerHTML = data.humidity;
}
