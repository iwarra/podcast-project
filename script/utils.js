export function loadPodcasts(pageNr = 1) {
  const POD_URL = `http://api.sr.se/api/v2/programs/index?programcategoryid=133&format=JSON&page=${pageNr}`;

  fetch(POD_URL)
    .then(response => response.json())
    .then(data => { 
      return data
      // for (item of data.programs) {


      // }
    })
    .catch(error => console.log(error))
}

export function mountElements(data, root) {
    const podcastsElement = document.getElementById("podcasts-list")
    const singlePod = document.createElement('div')
    singlePod.className = 'pod-container'
    const name = document.createElement('h2')
    name.innerText = item.name
    const podImg = document.createElement('img')
    podImg.src = item.programimage
    podImg.alt = `Logo for ${item.name} podcast`
    const description = document.createElement('p')
    description.innerText = item.description
    singlePod.append(name)
    singlePod.append(podImg)
    singlePod.append(description)

    podcastsElement.append(singlePod)
}


function toggleTheme() {
  const bodyEl = document.getElementById("root")
  if (bodyEl.classList.contains('darkTheme')) {
    bodyEl.className = 'lightTheme'
  } else if (bodyEl.classList.contains('lightTheme')) {
    bodyEl.className = 'darkTheme'
  }
}

// add buttons to go back and forth between pods?
