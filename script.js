const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityAir = document.getElementById("city-air");
const cityTemp = document.getElementById("city-temp");


async function getData(cityName) {
    //dynamic insertion of city
   const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=01a7d12abad0462e813155024241010&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}



//add evenelistener to button
button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.country}, ${result.location.region},  ${result.location.name}`;
    cityTime.innerText = `${result.location.localtime}`;
    cityAir.innerText = `${result.current.air_quality.pm10} pm10, ${result.current.air_quality.pm2_5} pm2.5`;
    cityTemp.innerText = `${result.current.temp_c} C`;
    
    console.log(result);
    
    
})