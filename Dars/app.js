const taskInput = document.querySelector("#task__name");
const taskForm = document.querySelector("#task__adderPanel");
const taskCollection = document.querySelector("#collect");
const collection = document.querySelector("#collect");
const deleteAll = document.querySelector("#delete__all");
const alertAsk = document.querySelector(".alert__ask");
const con = document.querySelector(".container");
const yesBtn = document.querySelector("#yes__btn");
const noBtn = document.querySelector("#no__btn");
const filter = document.querySelector("#task__filter");
const Images = document.querySelector(".images");

taskForm.addEventListener("submit", myFunc);
/*Submit bilan Click ni farqi: Submit da keyboardagi ENTER ni ham bossa ishlaydi*/
function myFunc(event) {
  event.preventDefault();
  console.log(taskInput.value);

  const img1 = document.createElement("img");
  Images.appendChild(img1);

  img1.src = taskInput.value;
  console.log(img1);
}
