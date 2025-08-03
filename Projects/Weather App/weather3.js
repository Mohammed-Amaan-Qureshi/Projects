const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Tronto';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e3b61f8527msheacf79732ff6cc1p1ff8b9jsna93f5c87a48a',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

fetch(url,options)
.then(Response => Response.json())
.then(Response => console.log(Response))