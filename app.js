let text = document.querySelector("#text-box");
let icon = document.querySelector(".fa-regular");
let parent = document.querySelector(".checkbox");

const showText = (response) => {
  let newtask = document.createElement("p");
  let newIcon = document.createElement("span");
  let trash = document.createElement("span");
  let div = document.createElement("div");

  div.className = "check";
  newIcon.classList.add("fa-regular", "fa-square");
  trash.classList.add("fa-solid", "fa-trash");
  newtask.innerText = response;

  parent.appendChild(div);
  div.appendChild(newIcon);
  div.appendChild(newtask);
  div.appendChild(trash);

  newIcon.addEventListener("click", () => {
    replaceIcon(newIcon, newtask);
  });

  trash.addEventListener("click", () => {
    deleteTask(div);
  });
};

const replaceIcon = (newIcon, newtask) => {
  newIcon.classList.remove("fa-regular", "fa-square");
  newIcon.classList.add("fa-solid", "fa-square-check");
  Strikethrough(newtask);

  newIcon.addEventListener("click", () => {
    unreplaceIcon(newIcon);
    unstrike(newtask);
  });
};

const unreplaceIcon = (newIcon) => {
  newIcon.classList.remove("fa-solid", "fa-square-check");
  newIcon.classList.add("fa-regular", "fa-square");
};

const Strikethrough = (newtask) => {
  newtask.className = "cut";
};

const unstrike = (newtask) => {
  newtask.classList.remove("cut");
};

const deleteTask = (div) => {
  div.remove();
};

btn.addEventListener("click", () => {
  let response = text.value;

  if (response === "") {
    alert("please enter some text");
  } else {
    console.log(response);
    showText(response);
  }

  text.value = "";
});
