const url = "https://api.nasa.gov/planetary/apod?api_key=";
const key = "5x2rXM6NCC8T54ltexxJH0ZNOeIsBrv9273qfiIZ";
var date = new Date();
var dateToday = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
document.getElementById("input").max = dateToday;
console.log(dateToday);
function fetchData() {
  let date = document.getElementById("input").value;
  fetch(url + key + "&date=" + date)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("titulo").textContent = data.title;
      document.getElementById("data").textContent = data.date;
      document.getElementById("imagem").src = data.hdurl;
      document.getElementById("descricao").textContent = data.explanation;
    })
    .catch((error) => console.log(error));
}
