import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 저장소 이름이 'portfolio'이므로 base를 수정
  base: '/portfolio/',
  server: {
    port: 3000
  }
})
