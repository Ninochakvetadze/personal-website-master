import SectionCreator from "./join-us-section.js";
import validate from "./email-validator.js";
import "./styles/style.css";
document.addEventListener("DOMContentLoaded", () => {
    const sectionCreator = new SectionCreator();
    const realSection = sectionCreator.create("standard");

    const mainContainer = document.getElementById("app-container");
    const footer = document.querySelector("footer");

    mainContainer.insertBefore(realSection, footer);

    const form = realSection.querySelector("form");
    const emailInput = realSection.querySelector(".email-input");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let emailValue = emailInput.value;
        console.log(emailValue);
        alert(validate(emailValue));
        emailInput.value = "";
    });
});
