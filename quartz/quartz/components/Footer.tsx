import { QuartzComponent, QuartzComponentConstructor } from "./types"
import { componentRegistry } from "./registry"

const Footer: QuartzComponent = () => {
  return (
    <footer class="custom-footer">
      <div class="custom-footer-inner">
        <div class="custom-footer-left">
          <h2 class="custom-footer-brand">Blufrucy</h2>
          <p class="custom-footer-copy">© 2026 个人主页.</p>
        </div>
        <div class="custom-footer-right">
          <a class="custom-footer-link" href="mailto:lyerxl233@gmail.com">lyerxl233@gmail.com</a>
          <span class="custom-footer-phone">17377279852</span>
        </div>
      </div>
    </footer>
  )
}

Footer.css = `
.custom-footer {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
  border-top: 1px solid var(--lightgray);
  padding: 2.5rem 1.5rem;

  @media all and (min-width: 768px) {
    padding: 3rem 3rem;
  }
}

:root[saved-theme="dark"] .custom-footer {
  border-top-color: var(--lightgray);
}

.custom-footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media all and (min-width: 640px) {
    flex-direction: row;
  }
}

.custom-footer-left {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;

  @media all and (min-width: 640px) {
    text-align: left;
  }
}

.custom-footer-brand {
  font-family: var(--headerFont);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dark);
  margin: 0;
}

.custom-footer-copy {
  font-size: 0.75rem;
  color: var(--gray);
  margin: 0;
}

.custom-footer-right {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: right;
}

.custom-footer-link {
  font-size: 0.875rem;
  color: var(--darkgray);
  text-decoration: none;
  transition: color 0.2s;
}

.custom-footer-link:hover {
  color: var(--dark);
}

.custom-footer-phone {
  font-size: 0.875rem;
  color: var(--darkgray);
  cursor: default;
}
`

const footerFactory = (() => Footer) satisfies QuartzComponentConstructor
componentRegistry.register("footer", footerFactory, "local")
export default footerFactory
