import { loadPodcasts } from "./utils";

const root = document.getElementById("root")
const data = loadPodcasts()
console.log(data);
mountElements(data, root)

