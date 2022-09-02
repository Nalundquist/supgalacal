import GalAge from "./galcal";
import "./css/styles.css";

const formSubmit = (event) => {
	event.preventDefault();

	const resultSide = document.getElementById("result-sidebar");
	const ageInput = document.getElementById("age-input");
	const pietyInput = document.querySelector("input[name='piety']:checked").value;

	resultSide.classList.add("hidden");
	resultSide.classList.remove("results-bar");

	if (ageInput === 'undefined' || ageInput === 'null' || isNaN(ageInput) || pietyInput === 'undefined'){
		const errorP = document.createElement("p");
		resultSide.append(errorP);
		resultSide.classList.remove("hidden");
		resultSide.classList.add("results-bar");
		errorP.append("Please put in an age and your piousness to receive valid results.");
	} else {
		const galAge = new GalAge(ageInput, pietyInput);
		galAge.calAge();
		galAge.lifeExp();

		const resultHead = document.createElement("h4");
		resultSide.append(resultHead);
		resultHead.append("RESULTS");

		const earthResult1 = document.createElement("p");
		const earthResult2 = document.createElement("strong");
		const earthResult3 = document.createElement("p");
		const earthResult4 = document.createElement("p");
		const earthResult5 = document.createElement("strong");
		const earthResult6 = document.createElement("p");
		const mercResult1 = document.createElement("p");
		const mercResult2 = document.createElement("strong");
		const mercResult3 = document.createElement("p");
		const mercResult4 = document.createElement("p");
		const mercResult5 = document.createElement("strong");
		const mercResult6 = document.createElement("p");
		const venusResult1 = document.createElement("p");
		const venusResult2 = document.createElement("strong");
		const venusResult3 = document.createElement("p");
		const venusResult4 = document.createElement("p");
		const venusResult5 = document.createElement("strong");
		const venusResult6 = document.createElement("p");
		const marsResult1 = document.createElement("p");
		const marsResult2 = document.createElement("strong");
		const marsResult3 = document.createElement("p");
		const marsResult4 = document.createElement("p");
		const marsResult5 = document.createElement("strong");
		const marsResult6 = document.createElement("p");
		const jupiResult1 = document.createElement("p");
		const jupiResult2 = document.createElement("strong");
		const jupiResult3 = document.createElement("p");
		const jupiResult4 = document.createElement("p");
		const jupiResult5 = document.createElement("strong");
		const jupiResult6 = document.createElement("p");

		resultHead.after(earthResult1);
		earthResult1.append(earthResult2);
		earthResult2.append("Current Age on Planet Earth: ");
		earthResult2.after(earthResult3);
		earthResult3.append(galAge.earthAge);
		earthResult3.after(earthResult4);
		earthResult4.append(earthResult5);
		earthResult5.append("Life Expectancy on Planet Earth: ");
		earthResult5.after(earthResult6);
		earthResult6.append(galAge.earthExp);

		earthResult6.after(mercResult1);
		mercResult1.append(mercResult2);
		mercResult2.append("Current Age on Planet Mercury: ");
		mercResult2.after(mercResult3);
		mercResult3.append(galAge.mercAge);
		mercResult3.after(mercResult4);
		mercResult4.append(mercResult5);
		mercResult5.append("Life Expectancy on Planet Mercury: ");
		mercResult5.after(mercResult6);
		mercResult6.append(galAge.mercExp);

		mercResult6.after(venusResult1);
		venusResult1.append(venusResult2);
		venusResult2.append("Current Age on Planet Venus: ");
		venusResult2.after(venusResult3);
		venusResult3.append(galAge.venusAge);
		venusResult3.after(venusResult4);
		venusResult4.append(venusResult5);
		venusResult5.append("Life Expectancy on Planet Venus: ");
		venusResult5.after(venusResult6);
		venusResult6.append(galAge.venusExp);

		venusResult6.after(marsResult1);
		marsResult1.append(marsResult2);
		marsResult2.append("Current Age on Planet Earth: ");
		marsResult2.after(marsResult3);
		marsResult3.append(galAge.marsAge);
		marsResult3.after(marsResult4);
		marsResult4.append(marsResult5);
		marsResult5.append("Life Expectancy on Planet Mars: ");
		marsResult5.after(marsResult6);
		marsResult6.append(galAge.marsExp);

		marsResult6.after(jupiResult1);
		jupiResult1.append(jupiResult2);
		jupiResult2.append("Current Age on Planet Jupiter: ");
		jupiResult2.after(jupiResult3);
		jupiResult3.append(galAge.jupiAge);
		jupiResult3.after(jupiResult4);
		jupiResult4.append(jupiResult5);
		jupiResult5.append("Life Expectancy on Planet Jupiter: ");
		jupiResult5.after(jupiResult6);
		jupiResult6.append(galAge.jupiExp);

		if (this.earthAge > this.earthExp){
			const earthResult7 = document.createElement("p");
			const earthResult8 = document.createElement("strong");
			const earthResult9 = document.createElement("p");
			const mercResult7 = document.createElement("p");
			const mercResult8 = document.createElement("strong");
			const mercResult9 = document.createElement("p");
			const venusResult7 = document.createElement("p");
			const venusResult8 = document.createElement("strong");
			const venusResult9 = document.createElement("p");
			const marsResult7 = document.createElement("p");
			const marsResult8 = document.createElement("strong");
			const marsResult9 = document.createElement("p");
			const jupiResult7 = document.createElement("p");
			const jupiResult8 = document.createElement("strong");
			const jupiResult9 = document.createElement("p");
	
			earthResult6.after(earthResult7);
			earthResult7.append(earthResult8);
			earthResult8.append("Years dodging the Grim Reaper on Earth:");
			earthResult8.after(earthResult9);
			earthResult9.append(galAge.earthDiff);

			mercResult6.after(mercResult7);
			mercResult7.append(mercResult8);
			mercResult8.append("Years dodging the Grim Reaper on Mercury:");
			mercResult8.after(mercResult9);
			mercResult9.append(galAge.mercDiff);

			venusResult6.after(venusResult7);
			venusResult7.append(venusResult8);
			venusResult8.append("Years dodging the Grim Reaper on Venus:");
			venusResult8.after(venusResult9);
			venusResult9.append(galAge.venusDiff);
			
			marsResult6.after(marsResult7);
			marsResult7.append(marsResult8);
			marsResult8.append("Years dodging the Grim Reaper on Mars:");
			marsResult8.after(marsResult9);
			marsResult9.append(galAge.marsDiff);

			jupiResult6.after(jupiResult7);
			jupiResult7.append(jupiResult8);
			jupiResult8.append("Years dodging the Grim Reaper on Jupiter:");
			jupiResult8.after(jupiResult9);
			jupiResult9.append(galAge.jupiDiff);
			
		}
	}
}

window.addEventListener("load", () => {
	document.getElementById("age-pious-form").addEventListener("submit", formSubmit);
})