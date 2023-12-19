"use strict";
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");
const registerButton = document.getElementById("uv-register-sw");

if (location.pathname.startsWith(__uv$config.prefix)) {
  error.textContent = "Loading...";
  registerButton.classList.add("show");
}

window.addEventListener("load", async () => {
  try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    registerButton.classList.remove("show");
  }
});


async function start(){
try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    registerButton.classList.remove("show");
  }
}
start();
registerButton.addEventListener("click", async () => {
  try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    registerButton.classList.remove("show");
  }
});
