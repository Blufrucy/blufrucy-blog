import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { componentRegistry } from "./registry"

interface NavLink {
  href: string
  zh: string
  en: string
}

const NAV_LINKS: NavLink[] = [
  { href: "/项目", zh: "项目", en: "Projects" },
  { href: "/博客", zh: "博客", en: "Blog" },
  { href: "/相册", zh: "相册", en: "Album" },
  { href: "/音乐", zh: "音乐", en: "Music" },
  { href: "/动漫", zh: "动漫", en: "Anime" },
  { href: "/收藏", zh: "收藏", en: "Bookmarks" },
]

const Navbar: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const currentSlug = fileData.slug ?? ""

  const isActive = (href: string): boolean => {
    if (href === "/") {
      return currentSlug === "index" || currentSlug === ""
    }
    const targetSlug = href.slice(1) // Remove leading "/"
    return currentSlug === targetSlug || currentSlug.startsWith(targetSlug + "/")
  }

  return (
    <nav class={classNames(displayClass, "navbar")}>
      <div class="navbar-inner">
        <a href="/" class="navbar-brand">
          贺钰堂/Blufrucy
        </a>
        <div class="navbar-links">
          {NAV_LINKS.map((link) => (
            <a
              href={link.href}
              class={classNames(displayClass, "navbar-link", isActive(link.href) ? "active" : "")}
            >
              <span class="lang-zh">{link.zh}</span>
              <span class="lang-en">{link.en}</span>
            </a>
          ))}
        </div>
        <div class="navbar-actions">
          {/* Darkmode toggle */}
          <button class="navbar-action-btn darkmode" aria-label="Toggle dark mode">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="dayIcon"
              viewBox="0 0 35 35"
              fill="currentColor"
            >
              <path d="M6,17.5C6,16.672,5.328,16,4.5,16h-3C0.672,16,0,16.672,0,17.5S0.672,19,1.5,19h3C5.328,19,6,18.328,6,17.5z M7.5,26c-0.414,0-0.789,0.168-1.061,0.439l-2,2C4.168,28.711,4,29.086,4,29.5C4,30.328,4.671,31,5.5,31c0.414,0,0.789-0.168,1.06-0.44l2-2C8.832,28.289,9,27.914,9,27.5C9,26.672,8.329,26,7.5,26z M17.5,6C18.329,6,19,5.328,19,4.5v-3C19,0.672,18.329,0,17.5,0S16,0.672,16,1.5v3C16,5.328,16.671,6,17.5,6z M27.5,9c0.414,0,0.789-0.168,1.06-0.439l2-2C30.832,6.289,31,5.914,31,5.5C31,4.672,30.329,4,29.5,4c-0.414,0-0.789,0.168-1.061,0.44l-2,2C26.168,6.711,26,7.086,26,7.5C26,8.328,26.671,9,27.5,9z M6.439,8.561C6.711,8.832,7.086,9,7.5,9C8.328,9,9,8.328,9,7.5c0-0.414-0.168-0.789-0.439-1.061l-2-2C6.289,4.168,5.914,4,5.5,4C4.672,4,4,4.672,4,5.5c0,0.414,0.168,0.789,0.439,1.06L6.439,8.561z M33.5,16h-3c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h3c0.828,0,1.5-0.672,1.5-1.5S34.328,16,33.5,16z M28.561,26.439C28.289,26.168,27.914,26,27.5,26c-0.828,0-1.5,0.672-1.5,1.5c0,0.414,0.168,0.789,0.439,1.06l2,2C28.711,30.832,29.086,31,29.5,31c0.828,0,1.5-0.672,1.5-1.5c0-0.414-0.168-0.789-0.439-1.061L28.561,26.439z M17.5,29c-0.829,0-1.5,0.672-1.5,1.5v3c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-3C19,29.672,18.329,29,17.5,29z M17.5,7C11.71,7,7,11.71,7,17.5S11.71,28,17.5,28S28,23.29,28,17.5S23.29,7,17.5,7z M17.5,25c-4.136,0-7.5-3.364-7.5-7.5c0-4.136,3.364-7.5,7.5-7.5c4.136,0,7.5,3.364,7.5,7.5C25,21.636,21.636,25,17.5,25z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="nightIcon"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M96.76,66.458c-0.853-0.852-2.15-1.064-3.23-0.534c-6.063,2.991-12.858,4.571-19.655,4.571C62.022,70.495,50.88,65.88,42.5,57.5C29.043,44.043,25.658,23.536,34.076,6.47c0.532-1.08,0.318-2.379-0.534-3.23c-0.851-0.852-2.15-1.064-3.23-0.534c-4.918,2.427-9.375,5.619-13.246,9.491c-9.447,9.447-14.65,22.008-14.65,35.369c0,13.36,5.203,25.921,14.65,35.368s22.008,14.65,35.368,14.65c13.361,0,25.921-5.203,35.369-14.65c3.872-3.871,7.064-8.328,9.491-13.246C97.826,68.608,97.611,67.309,96.76,66.458z" />
            </svg>
          </button>
          {/* Locale toggle */}
          <button class="locale-toggle" aria-label="Switch language">
            中/EN
          </button>
        </div>
      </div>
    </nav>
  )
}

// ============================================================================
// Darkmode inline script — runs before DOM ready to prevent FOUC
// ============================================================================
Navbar.beforeDOMLoaded = `
const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
const currentTheme = localStorage.getItem("theme") ?? userPref
document.documentElement.setAttribute("saved-theme", currentTheme)

const syncBodyThemeClass = (theme) => {
  document.body?.classList.remove("theme-dark", "theme-light")
  document.body?.classList.add(\`theme-\${theme}\`)
}

const emitThemeChangeEvent = (theme) => {
  const event = new CustomEvent("themechange", { detail: { theme } })
  document.dispatchEvent(event)
}

const setupDarkmode = () => {
  const currentSavedTheme =
    document.documentElement.getAttribute("saved-theme") ?? "light"
  syncBodyThemeClass(currentSavedTheme)

  const switchTheme = () => {
    const newTheme =
      document.documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    syncBodyThemeClass(newTheme)
    emitThemeChangeEvent(newTheme)
  }

  const themeChange = (e) => {
    const newTheme = e.matches ? "dark" : "light"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    syncBodyThemeClass(newTheme)
    emitThemeChangeEvent(newTheme)
  }

  for (const btn of document.getElementsByClassName("darkmode")) {
    btn.addEventListener("click", switchTheme)
    window.addCleanup(() => btn.removeEventListener("click", switchTheme))
  }

  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("change", themeChange)
  window.addCleanup(() => colorSchemeMediaQuery.removeEventListener("change", themeChange))
}

document.addEventListener("nav", setupDarkmode)
document.addEventListener("render", setupDarkmode)
`

// ============================================================================
// Locale switcher script — runs after DOM ready
// ============================================================================
Navbar.afterDOMLoaded = `
const applyLocale = (locale) => {
  document.documentElement.setAttribute("data-locale", locale)
  localStorage.setItem("locale", locale)
}

const savedLocale = localStorage.getItem("locale")
if (savedLocale) {
  document.documentElement.setAttribute("data-locale", savedLocale)
}

const setupLocaleToggle = () => {
  for (const btn of document.getElementsByClassName("locale-toggle")) {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-locale")
      const next = current === "en-US" ? "zh-CN" : "en-US"
      applyLocale(next)
    })
    window.addCleanup(() => {
      btn.replaceWith(btn.cloneNode(true))
    })
  }
}

document.addEventListener("nav", setupLocaleToggle)
document.addEventListener("render", setupLocaleToggle)
`

Navbar.css = `
.navbar {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 1.5rem 1.5rem;
  border-bottom: 1px solid var(--lightgray);
  background-color: rgba(250, 248, 248, 0.95);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  box-sizing: border-box;
}

:root[saved-theme="dark"] .navbar {
  background-color: rgba(22, 22, 24, 0.95);
}

@media all and (min-width: 768px) {
  .navbar {
    padding: 1.5rem 3rem;
  }
}

.navbar-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
}

.navbar-brand {
  font-family: var(--headerFont);
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
  letter-spacing: -0.02em;
  color: var(--dark);
  text-decoration: none;
  transition: opacity 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.navbar-brand:hover {
  opacity: 0.8;
}

.navbar-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.navbar-link {
  color: var(--gray);
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  transition: color 0.2s ease;
  white-space: nowrap;
  padding: 0;
  border-radius: 0;
  background: none;
}

.navbar-link:hover {
  color: var(--dark);
  background: none;
}

.navbar-link.active {
  color: var(--dark);
  background: none;
  font-weight: 600;
}

@media all and (max-width: 800px) {
  .navbar {
    padding: 1rem 1.5rem;
  }

  .navbar-inner {
    gap: 1rem;
  }

  .navbar-brand {
    font-size: 1.25rem;
  }

  .navbar-links {
    display: none;
  }

  .navbar-link {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
  }
}
`

const navbarFactory = (() => Navbar) satisfies QuartzComponentConstructor
componentRegistry.register("navbar", navbarFactory, "local")
export default navbarFactory
