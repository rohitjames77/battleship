module.exports = {
  testEnvironment: 'node', // Use 'jsdom' for browser-like environment
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js$': 'babel-jest', // Use Babel for transforming JavaScript
  },
};