const Circuit = require('../circuit.js');

let client = new Circuit.Client({
  client_id: 'ebcf5281298a4f2fb1095ea58011d686',
  client_secret: 'aa1fec25fc294a53b60f1b6ce5120593',
  domain: 'circuitsandbox.net'
});

function logout() {
  client.logout()
    .then(() => console.log('Logged out'))
    .then(() => process.exit())
    .catch(console.error);
}

console.log('Logging on ...');

client.logon()
  .then(user => {
    console.log('Logged on as bot: ' + user.emailAddress);
    console.log('Logging out in 5 sec');
    setTimeout(() => logout(), 5000);
  })
  .catch(console.error);
