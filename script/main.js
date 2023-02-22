import { mountElements, fetchPodcasts, setupListeners } from './utils.js'

init()

async function init() {
    setupListeners()
    const data = await fetchPodcasts()
    mountElements(data)
}
