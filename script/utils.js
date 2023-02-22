async function fetchPodcasts() {
    try {
        const POD_URL =
            'http://api.sr.se/api/v2/programs/index?programcategoryid=133&format=JSON'
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

    const podcastContainer = document.createElement('div')
    podcastContainer.className = 'podcast-container'

    const name = document.createElement('h2')
    name.innerText = data.name

    const podImg = document.createElement('img')
    podImg.src = data.programimage
    podImg.alt = `Logo for ${data.name} podcast`

    const description = document.createElement('p')
    description.innerText = data.description

    podcastContainer.append(name)
    podcastContainer.append(podImg)
    podcastContainer.append(description)

    root.append(podcastContainer)
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

export { mountElements, fetchPodcasts, toggleTheme, setupListeners }
