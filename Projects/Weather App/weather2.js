let destination 
// let url = `https://apjoy-weather-forecast.p.rapidapi.com/forecast?location=${destination}&days=3`

let btn = document.querySelector("#btn")
let input = document.querySelector("input")

let tempBox = document.querySelector("#temp-box") 

let currTemp = document.querySelector("#currTemp")
let minTemp = document.querySelector("#minTemp")
let maxTemp = document.querySelector("#maxTemp")
let feelsLike = document.querySelector("#feelsLike")
let humidity = document.querySelector("#humidity")
let pressure = document.querySelector("#pressure")
let windSpeed = document.querySelector("#windSpeed")

    btn.addEventListener("click" , async ()=>{
        let inpVal = input.value.charAt(0).toUpperCase() + input.value.slice(1)
        console.log(inpVal)
        destination = inpVal

	const response = await fetch(`https://apjoy-weather-forecast.p.rapidapi.com/forecast?location=${destination}&days=3`, options);

	const result = await response.json();
	// console.log(result);

        // console.log(result.list[2].main.temp)
        tempBox.textContent = `${inpVal} : ${result.list[1].main.temp}`
        currTemp.textContent = `Current Temprature : ${result.list[1].main.temp}`
        minTemp.textContent = `Minimum Temprature : ${result.list[1].main.temp_min}`
        maxTemp.textContent = `Maximum Temprature : ${result.list[1].main.temp_max}`
        feelsLike.textContent = `Feels Like : ${result.list[1].main.feels_like}`
        humidity.textContent = `Humidity : ${result.list[1].main.humidity}`
        pressure.textContent = `Pressure : ${result.list[1].main.pressure}`
        windSpeed.textContent = `Wind Speed : ${result.list[1].wind.speed}`

        // console.log(result.list[1].main.temp)
        // console.log(result.list[1].main.temp_min)
        // console.log(result.list[1].main.temp_max)
        // console.log(result.list[1].main.feels_like)
        // console.log(result.list[1].main.humidity)
        // console.log(result.list[1].main.pressure)
        // console.log(result.list[1].wind.speed)

        input.value = ""
    })

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e3b61f8527msheacf79732ff6cc1p1ff8b9jsna93f5c87a48a',
		'x-rapidapi-host': 'apjoy-weather-forecast.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// fetch(url,options)
// .then(Response => Response.json())
// .then(Response => console.log(Response))

// let hello = async()=>{
// 	try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
//     } 
//     catch (error) {
//         console.error(error);
//         }
// }
// hello()
// console.log(result)