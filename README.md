# Monkey project

This is a monkey project in charge of executing random instructions into a web page to look for errors in an automated way.

## Capabilities

Monkey can perform actions over the following HTML elements

1. `<a>`
2. `<input>`
3. `<select>`
4. `<button>`

## Install
Step Zero. Install the necessary dependencies by going to the root of the project and running:
```
  npm install
```

## Execution

First you got to open Cypress

```
  npm run start
```

Second 

```
  Click on "E2E testing" button
```

Third

```
  Select a user interface
```

Fourth

```
  Click on monkey testing
```
> This will execute the test


[Watch instructive video](https://drive.google.com/file/d/1PNsku1BeHR5dbnCC7P3rJEN6JqQyt1yS/view?usp=share_link)


## Configuration options

You can configure either the page you want to monkey to along with the amount of monkeys available to execute random actions.

### Page

If you want your monkeys to play around a different page you go to file

```
  cypress/e2e/monkey_testing.cy.js
```
> This is where our monkeys code lives

And then replace what ever is stored in variable WEB_PAGE

```
const WEB_PAGE = 'https://google.com'
```
> Here an example of pointing the monkeys to google.com

### Amount of monkeys

You can also increase or reduce the amount of iteration the program does. In each iteration a monkey will look for HTML elements to interact with and execute a random action over it when ever its found. The more monkeys you have the more chances you have to execute a random event.


Go to file 

```
  cypress/e2e/monkey_testing.cy.js
```

And change the value of AMOUNT_OF_MONKEYS for what ever int value you want. Bear in mind that this value should be positive. 

```
  const AMOUNT_OF_MONKEYS = 60;
```
