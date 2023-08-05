import SectionCreator from './join-us-section.js'
import validate from './email-validator.js'
import './styles/style.css'

document.addEventListener('DOMContentLoaded', () => {
  const sectionCreator = new SectionCreator()
  const joinSection = sectionCreator.create('standard')

  const mainContainer = document.getElementById('app-container')
  const footer = document.querySelector('footer')

  mainContainer.insertBefore(joinSection, footer)

  const subscriptionForm = joinSection.querySelector('form')
  const emailInput = joinSection.querySelector('.email-input')
  const subscribeButton = joinSection.querySelector('.subscribe-button')

  function inputHidden () {
    emailInput.style.display = 'none'
    subscribeButton.textContent = 'Unsubscribe'
    localStorage.setItem('subscriptionState', 'subscribed')
  }

  function inputShown () {
    emailInput.style.display = 'block'
    subscribeButton.textContent = 'Subscribe'
    localStorage.removeItem('subscriptionState')
    localStorage.removeItem('subscribedEmail')
  }

  subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const emailValue = emailInput.value

    const isValidEmail = validate(emailValue)
    if (isValidEmail === 'Email is valid!') {
      inputHidden()
      localStorage.setItem('subscribedEmail', emailValue)
    }

    emailInput.value = ''
  })

  emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value
    localStorage.setItem('subscribedEmail', emailValue)
  })

  const storedEmail = localStorage.getItem('subscribedEmail')
  if (storedEmail) {
    emailInput.value = storedEmail
  }

  const subscriptionState = localStorage.getItem('subscriptionState')
  if (subscriptionState === 'subscribed') {
    inputHidden()
  }

  subscribeButton.addEventListener('click', () => {
    if (emailInput.style.display === 'none') {
      inputShown()
    } else {
      inputHidden()
    }
  })
})

// document.addEventListener("DOMContentLoaded", () => {
//     const sectionCreator = new SectionCreator();
//     const realSection = sectionCreator.create("standard");

//     const mainContainer = document.getElementById("app-container");
//     const footer = document.querySelector("footer");

//     mainContainer.insertBefore(realSection, footer);

//     const form = realSection.querySelector("form");
//     const emailInput = realSection.querySelector(".email-input");

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         let emailValue = emailInput.value;
//         console.log(emailValue);
//         alert(validate(emailValue));
//         emailInput.value = "";
//     });
// });
