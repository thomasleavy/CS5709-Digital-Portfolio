import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/CS5709-Digital-Portfolio/",
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})
