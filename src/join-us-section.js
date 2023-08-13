class SectionCreator {
    create(type) {
        // eslint-disable-next-line no-unused-vars
        const unusedVariable = "Hello World!";
        const section = document.createElement("section");
        section.classList.add("join-section");

        const h1 = document.createElement("h1");
        h1.textContent =
            type === "standard"
                ? "Join Our Program"
                : "Join Our Advanced Program";
        h1.classList.add("join-program-title");

        const h2 = document.createElement("h2");
        h2.textContent =
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        h2.classList.add("join-program-subtitle");

        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.placeholder = "Email";
        emailInput.classList.add("email-input");

        const subscribeButton = document.createElement("button");
        subscribeButton.textContent =
            type === "standard" ? "Subscribe" : "Subscribe to Advanced Program";
        subscribeButton.classList.add("subscribe-button");

        const form = document.createElement("form");
        form.appendChild(emailInput);
        form.appendChild(subscribeButton);

        const coverContent = document.createElement("div");
        coverContent.classList.add("cover-content");
        coverContent.appendChild(h1);
        coverContent.appendChild(h2);
        coverContent.appendChild(form);

        section.appendChild(coverContent);

        section.remove = () => {
            section.parentNode.removeChild(section);
        };

        return section;
    }
}

export default SectionCreator;
