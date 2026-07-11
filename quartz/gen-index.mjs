import fs from "fs"
import path from "path"

const pluginsDir = ".quartz/plugins"
const dirs = fs.readdirSync(pluginsDir).filter(name =>
  fs.statSync(path.join(pluginsDir, name)).isDirectory()
)

// Shared types that come from @quartz-community/types - skip re-exporting
const SHARED_TYPES = new Set([
  "QuartzComponent", "QuartzComponentConstructor", "QuartzComponentProps",
  "QuartzEmitterPlugin", "QuartzTransformerPlugin", "QuartzFilterPlugin",
  "QuartzPageTypePlugin", "QuartzEmitterPluginInstance",
  "QuartzTransformerPluginInstance", "QuartzFilterPluginInstance",
  "QuartzPageTypePluginInstance", "QuartzPluginData", "QuartzConfig",
  "GlobalConfiguration", "StringResource", "VirtualPage",
  "PageMatcher", "PageGenerator", "BuildCtx",
])

const seen = new Map() // name -> source plugin
const overridableLines = []
const passthroughLines = []
const typeLines = []

for (const pluginName of dirs) {
  const dtsPath = path.join(pluginsDir, pluginName, "dist", "index.d.ts")
  if (!fs.existsSync(dtsPath)) continue

  const content = fs.readFileSync(dtsPath, "utf-8")

  // Parse re-exports: export { X } or export { X } from '...'
  const reExportBlocks = [...content.matchAll(/export\s*\{([^}]+)\}(?:\s*from\s*['"][^'"]+['"])?/g)]
  for (const match of reExportBlocks) {
    const source = match[2] // from '...' if present
    if (source?.startsWith("@")) continue // skip external re-exports

    const names = match[1].split(",").map(n => n.trim())
    for (const name of names) {
      const isType = name.startsWith("type ")
      const cleanName = isType ? name.replace(/^type\s+/, "") : name
      const finalName = cleanName.split(" as ").pop()?.trim()

      if (!finalName || finalName.startsWith("_")) continue
      if (SHARED_TYPES.has(finalName)) continue

      if (seen.has(finalName)) continue // skip duplicates
      seen.set(finalName, pluginName)

      if (isType) {
        typeLines.push(`export type { ${finalName} } from "./${pluginName}/dist/index.js"`)
      } else {
        passthroughLines.push(`export { ${finalName} } from "./${pluginName}/dist/index.js"`)
      }
    }
  }

  // Parse declare const/function/var (overridable exports)
  const declareExports = [...content.matchAll(/declare\s+(const|function|var)\s+(\w+)/g)]
  for (const [, , name] of declareExports) {
    if (SHARED_TYPES.has(name) || seen.has(name)) continue
    seen.set(name, pluginName)
    overridableLines.push(`// @use override\nexport { ${name} } from "./${pluginName}/dist/index.js"`)
  }
}

const lines = [
  "// Auto-generated plugin barrel file",
  "// @use override exports (plugin instances - use registry to override)",
  ...overridableLines,
  "// Passthrough re-exports",
  ...passthroughLines,
  "// Type-only exports",
  ...typeLines,
  "",
]

fs.writeFileSync(path.join(pluginsDir, "index.ts"), lines.join("\n"))
console.log(`Generated index.ts: ${overridableLines.length} overridable + ${passthroughLines.length} passthrough + ${typeLines.length} type = ${overridableLines.length + passthroughLines.length + typeLines.length} total exports`)
