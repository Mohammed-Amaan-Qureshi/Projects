// const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=delhi&format=json&u=f';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e3b61f8527msheacf79732ff6cc1p1ff8b9jsna93f5c87a48a',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

fetch(url,options)
.then(Response => Response.json())
.then(Response => console.log(Response))