module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'FadePreloader',
      externals: {
        react: 'React'
      }
    }
  }
}
