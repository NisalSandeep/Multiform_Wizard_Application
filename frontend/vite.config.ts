import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue, etc.
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // That's it! DaisyUI is handled in the CSS file.
  ],
})