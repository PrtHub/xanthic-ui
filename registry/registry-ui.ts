import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "cosmic-scene",
    type: "registry:ui",
    dependencies: [],
    files: ["ui/cosmic-scene.tsx"],
  },
  {
    name: "canvas-button",
    type: "registry:ui",
    dependencies: ["framer-motion", "class-variance-authority"],
    files: ["ui/canvas-button.tsx"],
    registryDependencies: [],
  },
  {
    name: "sketch-input",
    type: "registry:ui",
    dependencies: ["framer-motion", "class-variance-authority"],
    files: ["ui/sketch-input.tsx"],
    registryDependencies: [],
  },
  {
    name: "gallery-grid",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/gallery-grid.tsx"],
  },
  {
    name: "easel-tabs",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tabs", "framer-motion"],
    files: ["ui/easel-tabs.tsx"],
  },
  {
    name: "palette-navigation",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: ["ui/palette-navigation.tsx"],
  },
  {
    name: "canvas-modal",
    type: "registry:ui",
    dependencies: ["framer-motion", "@radix-ui/react-dialog", "lucide-react"],
    files: ["ui/canvas-modal.tsx"],
  },
  {
    name: "brush-stroke-loader",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/brush-stroke-loader.tsx"],
  },
  {
    name: "canvas-slider",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slider", "framer-motion"],
    files: ["ui/canvas-slider.tsx"],
  },
  {
    name: "art-board-layout",
    type: "registry:ui",
    dependencies: ["@dnd-kit/core"],
    files: ["ui/art-board-layout.tsx"],
  },
  {
    name: "palette-toast",
    type: "registry:ui",
    dependencies: [],
    files: ["ui/palette-toast.tsx"],
    registryDependencies: [],
  },
  {
    name: "canvas-drawer",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/canvas-drawer.tsx"],
  },
  {
    name: "canvas-grid",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/canvas-grid.tsx"],
  },
  {
    name: "artistic-navigation",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/artistic-navigation.tsx"],
  },
  {
    name: "smart-dock",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/smart-dock.tsx"],
  },
  {
    name: "studio-light",
    type: "registry:ui",
    dependencies: ["framer-motion", "next-themes"],
    files: ["ui/studio-light.tsx"],
  },
  {
    name: "sketch-accordion",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-accordion"],
    files: ["ui/sketch-accordion.tsx"],
  },
  {
    name: "canvas-menu",
    type: "registry:ui",
    registryDependencies: ["@radix-ui/react-menu"],
    files: ["ui/canvas-menu.tsx"],
  },
  {
    name: "artistic-tooltip",
    type: "registry:ui",
    dependencies: ["class-variance-authority"],
    files: ["ui/artistic-tooltip.tsx"],
  },
  {
    name: "canvas-annotations",
    type: "registry:ui",
    dependencies: [],
    files: ["ui/canvas-annotations.tsx"],
  },
  {
    name: "layer-manager",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/layer-manager.tsx"],
  },
  {
    name: "texture-browser",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/texture-browser.tsx"],
  },
  {
    name: "art-board-presets",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/art-board-presets.tsx"],
  },
  {
    name: "canvas-timeline",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/canvas-timeline.tsx"],
  },
  {
    name: "artistic-data-viz",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/artistic-data-viz.tsx"],
  },
  {
    name: "stepper",
    type: "registry:ui",
    dependencies: ["class-variance-authority"],
    files: ["ui/stepper.tsx"],
    registryDependencies: ["button"],
  },
  {
    name: "studio-pagination",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/studio-pagination.tsx"],
  },
  {
    name: "collapsible-card",
    type: "registry:ui",
    dependencies: ["lucide-react", "framer-motion"],
    files: ["ui/collapsible-card.tsx"],
  },
  {
    name: "gallery-flow",
    type: "registry:ui",
    dependencies: ["lucide-react", "framer-motion"],
    files: ["ui/gallery-flow.tsx"],
  },
  {
    name: "studio-shortcuts-guide",
    type: "registry:ui",
    dependencies: ["lucide-react", "framer-motion"],
    files: ["ui/studio-shortcuts-guide.tsx"],
  },
  {
    name: "creative-otp-input",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/creative-otp-input.tsx"],
  },
  {
    name: "creative-clipboard-actions",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: ["ui/creative-clipboard-actions.tsx"],
  },
  {
    name: "studio-share-module",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react", "qrcode.react"],
    files: ["ui/studio-share-module.tsx"],
  },
  {
    name: "artistic-settings-panel",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: ["ui/artistic-settings-panel.tsx"],
  },
  {
    name: "creative-code-display",
    type: "registry:ui",
    dependencies: ["framer-motion", "next-themes", "prismjs"],
    files: ["ui/creative-code-display.tsx"],
  },
  {
    name: "sketch-calendar-picker",
    type: "registry:ui",
    dependencies: ["framer-motion", "date-fns", "lucide-react"],
    files: ["ui/sketch-calendar-picker.tsx"],
  },
  {
    name: "texture-blend-transitions",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/texture-blend-transitions.tsx"],
  },
  {
    name: "artistic-cursor-effects",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/artistic-cursor-effects.tsx"],
  },
  {
    name: "canvas-voice-commander",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/canvas-voice-commander.tsx"],
  },
  {
    name: "creative-error-boundaries",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: ["ui/creative-error-boundaries.tsx"],
  },
  {
    name: "gradient-mesh-background",
    type: "registry:ui",
    dependencies: [],
    files: ["ui/gradient-mesh-background.tsx"],
  },
  {
    name: "grid-pattern-background",
    type: "registry:ui",
    dependencies: [],
    files: ["ui/grid-pattern-background.tsx"],
  },
  {
    name: "particle-background",
    type: "registry:ui",
    dependencies: [],
    files: ["ui/particle-background.tsx"],
  },
  {
    name: "prism-hero",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/prism-hero.tsx"],
  },
  {
    name: "climate-artboard",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/climate-artboard.tsx"],
  },
  {
    name: "stacked-carousel",
    type: "registry:ui",
    dependencies: [],
    files: ["ui/stacked-carousel.tsx"],
  },
  {
    name: "expand-image",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/expand-image.tsx"],
  },
  {
    name: "neumorphism-loader",
    type: "registry:ui",
    files: ["ui/neumorphism-loader.tsx"],
  },
  {
    name: "swarm-effect",
    type: "registry:ui",
    files: ["ui/swarm-effect.tsx"],
  },
  {
    name: "mesh-matrix",
    type: "registry:ui",
    dependencies: ["@react-three/fiber", "@react-three/drei", "three"],
    files: ["ui/mesh-matrix.tsx"],
  },
  {
    name: "blob-background",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/blob-background.tsx"],
  },
];
