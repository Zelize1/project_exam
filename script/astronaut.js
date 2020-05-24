/* Number of astronauts in space */

const peopleInSpaceUrl = "http://api.open-notify.org/astros.json";
const corsEnabled = "https://noroffcors.herokuapp.com/" + peopleInSpaceUrl;

async function fetchAstronauts() {

    const amount = document.querySelector("#peopleInSpace");


    try {
        const response = await fetch(corsEnabled);
        const results = await response.json();

        amount.innerHTML = results.number;

        console.log(results);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Done.");
    }

}

fetchAstronauts();


