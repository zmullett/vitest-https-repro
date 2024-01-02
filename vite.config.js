import basicSsl from '@vitejs/plugin-basic-ssl'

export default {
  plugins: [
    basicSsl()
  ],
  test: {
    browser: {
      provider: 'playwright',
      name: 'chromium',
      enabled: true,
    },
  }
}