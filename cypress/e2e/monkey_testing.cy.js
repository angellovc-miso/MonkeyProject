import { faker } from '@faker-js/faker';


const WEB_PAGE = 'https://losestudiantes.co'


/**
 * @param {int} min 
 * @param {int} max 
 * @returns {int} between min and max
 **/
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * returns a random string
 * It could be either a well formed email
 * or a simple text 
 * @returns {string}
 */
const getRandomString = () => {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    return faker.internet.email();
  } else {
    return faker.lorem.words(Math.floor(Math.random() * 21) + 10);
  }
}

// List of events mokey looks to execute
const allowedEvents = ['input', 'a', 'select', 'button'];
const eventTriggers = {
  select: (selectOptions) => {
    cy.wrap(selectOptions).select(getRandomInt(0, selectOptions.length), {force: true});
  },
  input: (input) => {
    const randomString = getRandomString();
    cy.wrap(input).type(randomString, {force: true});
  },
  a: (a) => {
    cy.wrap(a).click({force: true});
  },
  button: (button) => {
    cy.wrap(button).click({force: true})
  },
}

/**
 * Selects a random element based on the
 * selector passed through
 * @param {string} elementType - selector 
 * @returns {WebElement}
 */
const getRandomElement = (elementType) => {
  const elements = Cypress.$(elementType);
  return elements.get(getRandomInt(0, elements.length));
}

const monkeys = (monkeysLeft = 1) => {
  if (monkeysLeft <= 0) return;
  const event = allowedEvents[getRandomInt(0, allowedEvents.length)];
  cy.wrap(`Monkey is looking for "${event}" elements`).then(() => {
    const element = getRandomElement(event);
    if (!element) {
      cy.log(`No html elements of type ${event} where found`)
      return;
    }
    cy.log(`Executing random action over element ${element}`)
    eventTriggers[event](element)

  }).then(() => {
    cy.wait(1000)
    monkeys(monkeysLeft - 1)
  });
}


describe('Los estudiantes under monkeys', function() {
  it('visits los estudiantes and survives monkeys', function() {
    cy.visit(WEB_PAGE);
      cy.wait(1000)
      cy.log(`Start monkeying page ${WEB_PAGE}`)
      monkeys(30)
  })
});

