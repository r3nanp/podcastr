import { pathsToModuleNameMapper } from 'ts-jest/utils'
import { compilerOptions } from './tsconfig.json'

export default {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.spec.tsx'],
  coverageProvider: 'v8',
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/'
  }),
  modulePaths: ['<rootDir>/src/', '<rootDir>.jest'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: ['<rootDir>/src/**/*.spec.tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  }
}
