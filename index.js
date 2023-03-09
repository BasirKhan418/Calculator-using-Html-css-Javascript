let str = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        str = eval(str);
        document.querySelector("input").value = str;
      } else if (e.target.innerHTML == "C") {
        str = "";
        document.querySelector("input").value = str;
      } else {
        console.log(e.target);
        str = str + e.target.innerHTML;
        document.querySelector("input").value = str;
      }
    } catch (err) {
      str = `Error occurs ${err}`;
      document.querySelector("input").value = str;
    }
  });
});

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  try {
    e.preventDefault();
    let input = document.querySelector("input").value;
    console.log(input);
    str = eval(input);
    document.querySelector("input").value = str;
  } catch (error) {
    str = `Error occurs ${error}`;
    document.querySelector("input").value = str;
  }
});

let addarea = document.getElementById("addarea");
let btn1 = document.getElementById("btn1");
addarea.innerHTML = "";
if (addarea.innerHTML == "") {
  addarea.innerHTML += ` <div class="add">
<h4>ADD YOUR CALUCALATION BY CLICK ON ADD BUTTON</h4>
</div>`;
}
btn1.addEventListener("click", () => {
  let d = new Date();
  addarea.innerHTML += ` <div class="add">
    <h4>Time:${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}</h4>
    <h4>Calculate value is :- ${str}</h4>
    </div>`;
});
