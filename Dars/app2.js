// const taskInput = document.querySelector("#task__name");
// const taskForm = document.querySelector("#task__adderPanel");
// const taskCollection = document.querySelector("#collect");
// const collection = document.querySelector("#collect");
// const deleteAll = document.querySelector("#delete__all");
// const alertAsk = document.querySelector(".alert__ask");
// const con = document.querySelector(".container");
// const yesBtn = document.querySelector("#yes__btn");
// const noBtn = document.querySelector("#no__btn");
// const filter = document.querySelector("#task__filter");
// const Images = document.querySelector(".images");

// taskForm.addEventListener("submit", myFunc);
// /*Submit bilan Click ni farqi: Submit da keyboardagi ENTER ni ham bossa ishlaydi*/
// function myFunc(event) {
//   event.preventDefault();
//   console.log(taskInput.value);

//   if (taskInput.value === "") {
//     alert("INPUT IS EMPTY");
//   } else {
//     const li = document.createElement("li");
//     const p = document.createElement("p");
//     const a = document.createElement("a");

//     a.innerHTML = '<i class = "fas fa-trash"></i>';
//     collection.appendChild(li);
//     li.appendChild(p);
//     li.appendChild(a);

//     a.addEventListener("click", (e) => {
//       if (e.target.parentElement.parentElement.className.includes("task")) {
//         e.target.parentElement.parentElement.remove();
//       }
//     });

//     li.className = "task";
//     p.innerHTML = taskInput.value;

//     taskInput.value = "";
//   }
// }

const taskInput = document.querySelector("#task__name");
const taskForm = document.querySelector("#task__adderPanel");
const collection = document.querySelector("#collect");
const deleteAll = document.querySelector("#delete__all");

taskForm.addEventListener("submit", myFunc);

function myFunc(event) {
  event.preventDefault();
  console.log(taskInput.value);

  if (taskInput.value === "") {
    alert("INPUT IS EMPTY");
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const a = document.createElement("a");

    a.innerHTML = '<i class = "fas fa-trash"><i>';
    collection.appendChild(li);
    li.appendChild(p);
    li.appendChild(a);

    a.addEventListener("click", (e) => {
      if (e.target.parentElement.parentElement.className.includes("task")) {
        e.target.parentElement.parentElement.remove();
      }
    });

    li.className = "task";
    p.innerHTML = taskInput.value;
    taskInput.value = "";
  }
}

const del_All = () => {
  const Lists = document.querySelectorAll("#collect > li");
  console.log(Lists);

  for (let i = 0; i < Lists.length; i++) {
    Lists[i].remove();
  }
};
