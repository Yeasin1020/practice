const lodeCountry = () => {
	fetch('https://restcountries.com/v3.1/all')
	.then(res => res.json())
	.then(data => displayCountries(data));
}

const displayCountries = (countries) => {
	console.log(countries[0]);

	const allCountry = countries.map (country => countriesHtml(country))
	// console.log(allCountry);

	const container = document.getElementById('countries');
	container.innerHTML = allCountry.join(' ');

}
// Option-2

const countriesHtml = ({name, flags}) => {
	
	return `
		<div class="country">
		 	<h2>${name.common} </h2>
			<img src="${flags.png}">
		</div>
	`
}


// Option - 1

// const countriesHtml = (country) => {
// 	// option-1
// 	const {name, flags} = country;
// 	return `
// 		<div class="country">
// 		 	<h2>${name.common} </h2>
// 			<img src="${flags.png}">
// 		</div>
// 	`
// }

lodeCountry();