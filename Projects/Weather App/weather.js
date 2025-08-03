const url = 'https://weatherapi-com.p.rapidapi.com/alerts.json?q=toronto';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e3b61f8527msheacf79732ff6cc1p1ff8b9jsna93f5c87a48a',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};


// fetch(url,options)
// .then(Response => Response.json())
// .then(Response => console.log(Response))


const hello = async()=>{
	try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
hello()