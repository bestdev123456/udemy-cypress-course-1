beforeEach(() => {
  
  cy
    .request('DELETE', 'localhost:3000/accounts');

});

it('sends a welcome email', () => {

  cy
    .visit('localhost:3000/signup');

  cy
    .get('[type=\'email\']')
    .type('indicate-because@jed4ut1j.mailosaur.net');

  cy
    .get('[type=\'password\']')
    .type('123@sta.com');

  cy
    .contains('Send me a welcome email')
    .prev()
    .check();

  cy
    .get('.signup-button')
    .click();

  cy
   .request({
     method: 'POST',
     url:'https://mailosaur.com/api/messages/search?server=:jed4ut1j',
     headers: {
       authorization: 'Basic' + Buffer.from('pt2GBJsaDieCx801').toString('base64')

     },
     body: {
       sentTo:'indicate-because@jed4ut1j.mailosaur.net'

     }



   });  
  
});