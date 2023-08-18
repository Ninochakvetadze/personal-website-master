import SectionCreator from './join-us-section.js'
import { validate } from './email-validator.js'
import './styles/style.css'
import { subscribe, unsubscribe } from './subscription.js'
import { displayCommunityData } from './community.js'

document.addEventListener('DOMContentLoaded', async () => {
  const sectionCreator = new SectionCreator()
  const realSection = sectionCreator.create('standard')

  const mainContainer = document.getElementById('app-container')
  const communitySection = await displayCommunityData()
  const appSection = document.querySelector('.app-section')
  appSection.insertAdjacentElement('afterend', communitySection)

  const footer = document.querySelector('footer')

  mainContainer.insertBefore(realSection, footer)

  const form = realSection.querySelector('form')
  const emailInput = realSection.querySelector('.email-input')
  const subscribeButton = realSection.querySelector('.subscribe-button')

  // subscribeButton.style.opacity = '1'

  const worker = new Worker(new URL('./analitycs-worker.js', import.meta.url))

  const sendEventToWorker = (event) => {
    worker.postMessage({
      type: 'click',
      target: event.target.tagName,
      id: event.target.id,
      className: event.target.className,
      timeStamp: event.timeStamp
    })
  }

  document.addEventListener('click', (event) => {
    if (event.target.matches('button, .email-input')) {
      sendEventToWorker(event)
    }
  })

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (validate(emailInput.value)) {
      emailInput.style.display = 'none'
      subscribeButton.textContent = 'Unsubscribe'
      localStorage.setItem('subscribed', 'true')
      localStorage.setItem('email', emailInput.value)
      subscribeButton.style.opacity = '0.5'
      try {
        await subscribe(emailInput.value)
        emailInput.value = ''
      } catch (error) {
        console.error('Error subscribing:', error)
      }
    } else if (subscribeButton.textContent === 'Unsubscribe') {
      emailInput.style.display = 'inline-block'
      emailInput.value = ''
      subscribeButton.textContent = 'Subscribe'
      subscribeButton.style.opacity = '1'
      localStorage.removeItem('subscribed')
      localStorage.removeItem('email')
      try {
        await unsubscribe()
      } catch (error) {
        console.error('Error unsubscribing:', error)
      }
    } else {
      alert('Not a valid email')
    }
  })
  const storedEmail = localStorage.getItem('email')
  if (storedEmail) {
    emailInput.value = storedEmail
  }
})
