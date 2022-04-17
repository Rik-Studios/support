// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  testMatch: ['<rootDir>/**/*.(spec).(ts|tsx)'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/setup-test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/tests/',
    '/scripts/',
    '/public/',
    '/coverage/',
    '/.storybook/',
    '/.styles/',
    '/styles/',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    'pages/**/*.{js,tsx}',
    '!**/*.placeloader.js',
    '!src/styles/*.ts',
    '!**/*.schema.ts',
    '!**/*.styles.ts',
    '!**/*.static.ts',
    '!**/.storybook/**',
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
