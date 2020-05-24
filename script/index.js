// Astronomy Picture of the Day from NASA

const request = new XMLHttpRequest();
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=zdZk8CsazOB6zklv40wXhkxWl2NcQ8aQeh4P18PL";

request.open("GET", apodURL);
request.send();

request.addEventListener("load", function(){
	if(request.status == 200 && request.readyState == 4){
    const response = JSON.parse(request.responseText); 
    
    document.getElementById("title").textContent = response.title;
    document.getElementById("explanation").textContent = response.explanation;
    document.getElementById("date").textContent = response.date;
    document.getElementById("apod").src = response.hdurl;
    document.getElementById("owner").textContent = response.copyright;
    }
})