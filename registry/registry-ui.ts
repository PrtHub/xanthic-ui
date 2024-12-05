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
    name: "painterly-select",
    type: "registry:ui",
    dependencies: ["framer-motion", "@radix-ui/react-select", "lucide-react"],
    files: ["ui-canvas/painterly-select.tsx"],
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
];
