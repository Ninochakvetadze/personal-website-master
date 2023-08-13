import { createCommunityCard } from './communityCard.js'

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/community')
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error('Failed to retrieve community data')
    }
  } catch (error) {
    console.error('An error occurred while fetching community data', error)
  }
}

const displayCommunityData = async () => {
  try {
    const data = await fetchData()

    const section = document.createElement('section')
    section.classList.add('community-section')

    const divHeading = document.createElement('div')
    divHeading.classList.add('section-heading')

    const h2 = document.createElement('h2')
    h2.innerHTML = 'Big Community of <br />People Like You'

    const p = document.createElement('p')
    p.innerHTML =
      'We`re proud of our products, and we`re <br />really excited when we get feedback from our users.'

    divHeading.appendChild(h2)
    divHeading.appendChild(p)

    section.appendChild(divHeading)

    const communityWrapper = document.createElement('div')
    communityWrapper.classList.add('community-wrapper')

    const communityCards = data.map((itemData) => createCommunityCard(itemData))

    communityCards.forEach((card) => {
      communityWrapper.appendChild(card)
    })

    section.appendChild(communityWrapper)

    document.body.appendChild(section)
    return section
  } catch (error) {
    console.error('An error occurred while displaying community data', error)
  }
}

export { fetchData, displayCommunityData }
