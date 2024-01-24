const fetchCurrency = async () => {
	try {
		const response = await fetch(
			// "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
			"https://wallet-api-5ezy.onrender.com/api/currensies"
		);
		const rates = response.json();
		// console.log(rates);
		return rates;
	} catch (error) {
		throw error;
	}
};
export default fetchCurrency;
