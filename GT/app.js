const btn = document.querySelector("button");
const peoplesEr = document.querySelector(".peoplesEr");

btn.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "peoples.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();
  request.onload = () => {
    const data = JSON.parse(request.response);
    data.forEach((people) => {
      peoplesEr.innerHTML += `
      <p>${people.name} ${people.age}</p>
    `;
    });
  };
});
