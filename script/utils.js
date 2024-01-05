async function fetchPodcasts() {
  try {
    const POD_URL =
      'https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=JSON'
    const response = await fetch(POD_URL)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

function mountElements(data) {
  data.programs.forEach((podcast) => mountPodcast(podcast))
}

function mountPodcast(data) {
  const root = document.getElementById('podcasts-list')

  const podcastWrapper = document.createElement('div')
  podcastWrapper.classList.add('podcast-wrapper', 'hidden')

  const podcastInfo = document.createElement('div')
  podcastInfo.className="podcast-info"

  const name = document.createElement('h2')
  name.innerText = data.name

  const podImg = document.createElement('img')
  podImg.src = data.programimage
  podImg.alt = `Logo for ${data.name} podcast`

  const description = document.createElement('p')
  description.innerText = data.description

  podcastWrapper.append(podImg)
  podcastWrapper.append(podcastInfo)
  podcastInfo.append(name)
  podcastInfo.append(description)

  root.append(podcastWrapper)
}

function setupListeners() {
  document
    .querySelector('button')
    .addEventListener('click', () => toggleTheme())
}

function toggleTheme() {
  const bodyElement = document.querySelector('body')
  const { classList } = bodyElement

  if (classList.contains('dark-theme')) {
    bodyElement.className = 'light-theme'
  } else {
    bodyElement.className = 'dark-theme'
  }
}

function elementObserver() {
  const options = {
    threshold: 0,
  }

  const callback = (list) => {
    list.forEach((podcast) => {
      if (podcast.isIntersecting) {
        podcast.target.classList.add('show')
      } else {
        podcast.target.classList.remove('show')
      }
    })
  }

  const observer = new IntersectionObserver(callback, options)
  const list = document.querySelectorAll('.podcast-wrapper')
  list.forEach((podcast) => observer.observe(podcast))
}

export {
  mountElements,
  fetchPodcasts,
  toggleTheme,
  setupListeners,
  elementObserver,
}
