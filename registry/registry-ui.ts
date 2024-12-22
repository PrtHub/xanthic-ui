import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "canvas-button",
    type: "registry:ui",
    dependencies: ["framer-motion", "class-variance-authority"],
    files: ["ui-canvas/canvas-button.tsx"],
    registryDependencies: [],
  },
  {
    name: "color-palette",
    type: "registry:ui",
    dependencies: ["class-variance-authority"],
    files: ["ui-canvas/color-palette.tsx"],
  },
  {
    name: "sketch-input",
    type: "registry:ui",
    dependencies: ["framer-motion", "class-variance-authority"],
    files: ["ui-canvas/sketch-input.tsx"],
    registryDependencies: [],
  },
  {
    name: "gallery-grid",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui-canvas/gallery-grid.tsx"],
  },
  {
    name: "easel-tabs",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tabs", "framer-motion"],
    files: ["ui-canvas/easel-tabs.tsx"],
  },
  {
    name: "palette-navigation",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: ["ui-canvas/palette-navigation.tsx"],
  },
  {
    name: "canvas-modal",
    type: "registry:ui",
    dependencies: ["framer-motion", "@radix-ui/react-dialog", "lucide-react"],
    files: ["ui-canvas/canvas-modal.tsx"],
  },
  {
    name: "brush-stroke-loader",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui-canvas/brush-stroke-loader.tsx"],
  },
  {
    name: "canvas-slider",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slider", "framer-motion"],
    files: ["ui-canvas/canvas-slider.tsx"],
  },
  {
    name: "art-board-layout",
    type: "registry:ui",
    dependencies: ["@dnd-kit/core"],
    files: ["ui-canvas/art-board-layout.tsx"],
  },
  {
    name: "palette-toast",
    type: "registry:ui",
    dependencies: [],
    files: ["ui-canvas/palette-toast.tsx"],
    registryDependencies: [],
  },
  {
    name: "canvas-drawer",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui-canvas/canvas-drawer.tsx"],
  },
  {
    name: "texture-overlay",
    type: "registry:ui",
    dependencies: [],
    files: ["ui-canvas/texture-overlay.tsx"],
  },
  {
    name: "canvas-color-picker",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui-canvas/canvas-color-picker.tsx"],
  },
  {
    name: "canvas-grid",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui-canvas/canvas-grid.tsx"],
  },
  {
    name: "artistic-navigation",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui-canvas/artistic-navigation.tsx"],
  },
  {
    name: "canvas-dock",
    type: "registry:ui",
    dependencies: ["framer-motion", "next-themes"],
    files: ["ui-canvas/canvas-dock.tsx"],
  },
  {
    name: "studio-light",
    type: "registry:ui",
    dependencies: ["framer-motion", "next-themes"],
    files: ["ui-canvas/studio-light.tsx"],
  },
  {
    name: "sketch-accordion",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-accordion"],
    files: ["ui-canvas/sketch-accordion.tsx"],
  },
  {
    name: "canvas-menu",
    type: "registry:ui",
    registryDependencies: ["@radix-ui/react-menu"],
    files: ["ui-canvas/canvas-menu.tsx"],
  },
  {
    name: "ink-alert",
    type: "registry:ui",
    dependencies: ["class-variance-authority", "lucide-react"],
    files: ["ui-canvas/ink-alert.tsx"],
  },
  {
    name: "artistic-tooltip",
    type: "registry:ui",
    dependencies: ["class-variance-authority"],
    files: ["ui-canvas/artistic-tooltip.tsx"],
  },
  {
    name: "canvas-annotations",
    type: "registry:ui",
    dependencies: [],
    files: ["ui-canvas/canvas-annotations.tsx"],
  },
  {
    name: "layer-manager",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui-canvas/layer-manager.tsx"],
  },
  {
    name: "brush-style-selector",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui-canvas/brush-style-selector.tsx"],
  },
  {
    name: "pattern-library",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui-canvas/pattern-library.tsx"],
  },
  {
    name: "texture-browser",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui-canvas/texture-browser.tsx"],
  },
  {
    name: "color-scheme-generator",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui-canvas/color-scheme-generator.tsx"],
  },
  {
    name: "art-board-presets",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui-canvas/art-board-presets.tsx"],
  },
  {
    name: "canvas-timeline",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui-canvas/canvas-timeline.tsx"],
  },
  {
    name: "artistic-data-viz",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui-canvas/artistic-data-viz.tsx"],
  },
  {
    name: "artistic-statistics-card",
    type: "registry:ui",
    files: ["ui-canvas/artistic-statistics-card.tsx"],
    dependencies: [],
  },
  {
    name: "stepper",
    type: "registry:ui",
    dependencies: ["class-variance-authority"],
    files: ["ui-canvas/stepper.tsx"],
    registryDependencies: ["button"],
  },
  {
    name: "studio-pagination",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui-canvas/studio-pagination.tsx"],
  },
  {
    name: "collapsible-card",
    type: "registry:ui",
    dependencies: ["lucide-react", "framer-motion"],
    files: ["ui-canvas/collapsible-card.tsx"],
  },
  {
    name: "gallery-flow",
    type: "registry:ui",
    dependencies: ["lucide-react", "framer-motion"],
    files: ["ui-canvas/gallery-flow.tsx"],
  },
  {
    name: "studio-shortcuts-guide",
    type: "registry:ui",
    dependencies: ["lucide-react", "framer-motion"],
    files: ["ui-canvas/studio-shortcuts-guide.tsx"],
  },
  {
    name: "creative-otp-input",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui-canvas/creative-otp-input.tsx"],
  },
  {
    name: "creative-clipboard-actions",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: ["ui-canvas/creative-clipboard-actions.tsx"],
  },
  {
    name: "studio-share-module",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react", "qrcode.react"],
    files: ["ui-canvas/studio-share-module.tsx"],
  },
  {
    name: "artistic-settings-panel",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: ["ui-canvas/artistic-settings-panel.tsx"],
  },
  {
    name: "creative-code-display",
    type: "registry:ui",
    dependencies: ["framer-motion", "next-themes", "prismjs"],
    files: ["ui-canvas/creative-code-display.tsx"],
  },
  {
    name: "sketch-calendar-picker",
    type: "registry:ui",
    dependencies: ["framer-motion", "date-fns", "lucide-react"],
    files: ["ui-canvas/sketch-calendar-picker.tsx"],
  },
  {
    name: "texture-blend-transitions",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui-canvas/texture-blend-transitions.tsx"],
  },
  {
    name: "artistic-cursor-effects",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui-canvas/artistic-cursor-effects.tsx"],
  },
  {
    name: "canvas-voice-commander",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui-canvas/canvas-voice-commander.tsx"],
  },
  {
    name: "creative-error-boundaries",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: ["ui-canvas/creative-error-boundaries.tsx"],
  },
];
