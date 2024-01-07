

# MySkill Automation Test 

This repository contains  automated tests for MySkill login feature using Cypress.

## Installation

Before running the automation test, ensure you have Node.js installed. If not, download it from [Node.js](https://nodejs.org/).

```bash
npm install
```

## Test Data Setup

1. Open the folder `cypress/fixtures/`.
2. Copy `user(example).json` and rename it to `user.json` and change your data login.

## Running the Automation Test

### Terminal

Run the automation test in the terminal:

```bash
npm run test
```

### Cypress GUI

1. Open Cypress in the browser:

```bash
npx cypress open
```

2. In the Cypress GUI, navigate to the "e23 test" folder.
3. Choose "electron browser" from the available browsers.
4. Click on `spec.cy.js` to run the test.

Ensure all dependencies and configurations are set up before running the tests. Happy testing!

## Screenshots

![Terminal Logo](cypress/screenshots/Screenshot%20(429).png) <br/>
![GUI Logo](cypress/screenshots/Screenshot%20(430).png)<br/>


