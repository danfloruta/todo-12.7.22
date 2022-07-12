"use strict";

const submit = document.querySelector(".btn");
const input = document.querySelector(".input");
const container = document.querySelector(".container");
const todo = document.querySelector(".todo");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  const paragraph = document.createElement("p");
  paragraph.innerText = input.value;
  todo.appendChild(paragraph);
  input.value = "";
});
