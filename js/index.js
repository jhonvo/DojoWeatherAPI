function message(){
    alert("Loading weather report...");
}

function cookiesaccept(element){
    element = document.querySelector(".cookies")
    element.remove();
}

function temperature(tags){
    // console.log(document.querySelector(".selector").value)    ;
    if (document.querySelector(".selector").value == "c"){
        tags = document.querySelectorAll(".temp");
        for (var i=0; i < tags.length; i++) {
            var convert = (tags[i].innerText - 32) * 5 / 9;
            tags[i].innerText = Math.round(convert);    
            // console.log("This is F:", tags[i].innerText, "This is C:", tags);
        }
    }
    else {
        tags = document.querySelectorAll(".temp");
        for (var i=0; i < tags.length; i++) {
            var convert = (tags[i].innerText *9 / 5) + 32;
            tags[i].innerText = Math.round(convert);
        }
    }

}

function getweather(){
    let key = 
    let URL = `https://api.openweathermap.org/data/2.5/onecall?lat=40.7143&exclude=minutely,hourly&lon=-74.006&units=imperial&appid=${key}`
    let settings = {
        method : 'GET'
    };

    fetch(URL, settings)
        .then(response => {
            console.log (response)
            if (response.ok){
                return response.json();
            }
            throw Error (response.statusText)
        })
        .then(data => {
            console.log(data.daily[0].weather[0].main)
            let high_today = document.querySelector('.today-temp-high');
            high_today.innerHTML = ` <span class="temp">${data.daily[0].temp.max}</span>°`
            let low_today = document.querySelector('.today-temp-low');
            low_today.innerHTML = ` <span class="temp">${data.daily[0].temp.min}</span>°`
            let today_for = document.querySelector('.today-for');
            today_for.innerHTML = `${data.daily[0].weather[0].main}`

        })
        .catch(error=>{
            console.log(error)
        })
}

getweather()
