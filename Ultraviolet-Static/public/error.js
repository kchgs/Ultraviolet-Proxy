"use strict";
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");
const registerButton = document.getElementById("uv-register-sw");

if (location.pathname.startsWith(__uv$config.prefix)) {
  error.textContent = "Click the button (twice, wait for load after 1st click) to start. ";
  registerButton.classList.add("show");
}
 try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    registerButton.classList.remove("show");
  }
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
