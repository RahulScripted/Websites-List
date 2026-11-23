import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

// Every load and reload starts at the top: no browser scroll restoration, no leftover #hash jump.
if ("scrollRestoration" in history) history.scrollRestoration = "manual"
if (location.hash) history.replaceState(null, "", location.pathname + location.search)
const toTop = () => window.scrollTo(0, 0)
toTop()
window.addEventListener("pageshow", (e) => { if (e.persisted) toTop() })
window.addEventListener("beforeunload", toTop)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
