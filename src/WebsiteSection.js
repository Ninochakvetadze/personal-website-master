class WebsiteSection extends HTMLElement {
  constructor () {
    super()

    const template = document.getElementById('website-section-template')
    const templateContent = template.content

    this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    )
  }

  static get observedAttributes () {
    return ['title', 'description']
  }

  attributeChangedCallback (oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render()
    }
  }

  connectedCallback () {
    this.render()
  }

  render () {
    const title = this.getAttribute('title') || ''
    const description = this.getAttribute('description') || ''

    this.shadowRoot.querySelector('.app-title').textContent = title
    this.shadowRoot.querySelector('.app-subtitle').textContent = description
  }
}

customElements.define('website-section', WebsiteSection)
