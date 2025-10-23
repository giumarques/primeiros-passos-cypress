# Primeiros Passos Cypress

This project is a beginner-friendly Cypress automation framework for testing the Orange HRM application. It demonstrates how to structure a Cypress project using **Page Object Model (POM)** and includes sample test cases for login and user information updates.

---

## Pre-requisites

Before running the tests, make sure you have:

- **Node.js** (v16 or later) installed  
- **npm** (comes with Node.js)  
- **Cypress** installed globally or as a project dependency  
- Access to the **Orange HRM application** (URL must be configured in tests if not using default `/auth/login`)  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/primeiros-passos-cypress.git
cd primeiros-passos-cypress


2. Install dependencies:

```sh
npm install
```

3. Install Cypress if not already installed:


```sh
npm install cypress --save-dev
```

## Random Data Generation

This project uses Chance.js to generate random test data for:

# Names

# Employee IDs

# Social security numbers

# Other personal details

Install Chance.js if not already included:

```sh
npm install chance
```

## Running Tests

Open Cypress Test Runner:

```sh
npx cypress open
```

Run Tests in Headless Mode:

```sh
npx cypress run
```

## Notes

Tests use Cypress + JavaScript with the Page Object Model for maintainability.

Both positive and negative scenarios are implemented.

Randomized data is generated using Chance.js for uniqueness in each test run.

Tests are independent to ensure consistent results.
