// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//   cy.request({
/*   method: 'POST',
    url: 'http://localhost:3000/api/users/login',
    body: {
      user: {
        email: 'jake@jake.jake',
        password: 'jakejake',
      }
    }
  })
  .then((resp) => {
    window.localStorage.setItem('jwt', resp.body.user.token)
  })*/
Cypress.Commands.add('login', () => {
  const auth = {
    id: 'user:d06fec44-2fc9-4edb-a211-d00603626f73',
    status: 2,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoidXNlcjpkMDZmZWM0NC0yZmM5LTRlZGItYTIxMS1kMDA2MDM2MjZmNzMiLCJlbWFpbCI6ImRhbmllbG1hcnRpbmppbWVuZXpAZ21haWwuY29tIn0sImlhdCI6MTU2NzQzODA0NywiZXhwIjoxNTY3NjEwODQ3fQ._KjUf7i4c8uuJbb3m0VZIDWVJPqnLOUt6q9ghDjyxpo',
    type: 2
  };
  const user = {
    id: 'user:d06fec44-2fc9-4edb-a211-d00603626f73',
    email: 'danielmartinjimenez@gmail.com',
    firstname: null,
    lastname: null,
    status: 2,
    accounttype_id: 2,
    delete: 0,
    referral_code: 'bd7a272a-3737-41a4-a4a7-166a957665fe'
  };

  window.localStorage.setItem('auth', JSON.stringify(auth));

  window.localStorage.setItem('user', JSON.stringify(user));
});
