export const createCommunityCard = (data) => {
  const communityItem = document.createElement('div')
  communityItem.classList.add('community-item')

  const img = document.createElement('img')
  img.src = data.avatar
  img.alt = 'Profile Picture'

  const p = document.createElement('p')
  p.textContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'

  const name = document.createElement('p')
  name.classList.add('name')
  name.textContent = `${data.firstName} ${data.lastName}`

  const designation = document.createElement('p')
  designation.classList.add('designation')
  designation.textContent = data.position

  communityItem.append(img, p, name, designation)

  return communityItem
}
