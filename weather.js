let icon = document.querySelector(".icon");
let input = document.querySelector(".input");
let form = document.querySelector(".form");
const info = document.querySelector(".info");
const error = document.querySelector(".err-msg");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log(input.value);
  let inputVal = input.value;
  const li = document.createElement("li");
  li.className = "list-items";

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=b1d95323276ee5704d1c3e21698af1cc`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let icon1 = data.weather[0].icon;

      const list = `<h4>${inputVal}</h4>
      <p class="temp">${Math.floor(data.main.temp)}<sup>°C</sup></p>
      <img src=https://api.openweathermap.org/img/w/${icon1}.png></img>
      <p class="desciption">${data.weather[0].description}</p>
      `;

      const del = document.createElement("button");
      del.innerHTML = "X";
      del.className = "del";

      li.innerHTML = list;
      li.appendChild(del);

      del.addEventListener("click", () => {
        console.log("hi");
        li.remove();
      });

      info.appendChild(li);
    })
    .catch((err) => {
      console.log(err);
      error.innerHTML = "Please enter valid city name :( ";
    });

  form.reset();
  error.innerHTML = "";
}
