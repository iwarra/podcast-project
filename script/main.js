import { mountElements, fetchPodcasts, setupListeners, elementObserver } from './utils.js'

init()

async function init() {
  setupListeners()
  const data = await fetchPodcasts()
  mountElements(data)
  elementObserver()
}
