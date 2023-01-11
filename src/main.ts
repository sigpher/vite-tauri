import "./style.css"
import { invoke } from "@tauri-apps/api"

document.addEventListener("DOMContentLoaded", async function () {
  const appContent = document.querySelector.bind(document)("#app")! as HTMLElement;
  appContent.addEventListener("pointerup", async function () {
    const result = await invoke("hello") as string;
    appContent.textContent = result
    setTimeout(function () {
      appContent.textContent = "Again";
    }, 1000)
  })

})
