module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec).+(ts)'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
