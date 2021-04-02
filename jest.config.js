module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/lib'],
  testMatch: ['<rootDir>/**/*.test.(js|jsx)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};