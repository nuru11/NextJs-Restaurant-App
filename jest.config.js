// jest.config.js
/*
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
/*const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
 moduleNameMapper: {
  '*@/components/(.*)$': '<rootDir>/components/$1',

  '*@/pages/(.*)$': '<rootDir>/pages/$1',
 },
 

  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)*/



//////////////////////////////////////

const nextJest = require('next/jest')

//import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})



// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
/*
  moduleNameMapper: {
    '*@/components/(.*)$': '<rootDir>/components/$1',
  
    '*@/pages/(.*)$': '<rootDir>/pages/$1',
   },*/
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)


