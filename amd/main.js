require.config({
  paths: {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
    'circuit-sdk': '//unpkg.com/circuit-sdk/circuit'
  }
});

require(['jquery', 'circuit-sdk'], ($, Circuit) => {
  let client = new Circuit.Client({
    client_id: 'ebcf5281298a4f2fb1095ea58011d686',
    domain: 'circuitsandbox.net'
  });

  $('#logon').on('click', e => {
    client.logon()
      .then(user => {
        console.log('user', user);
        document.querySelector('#user').innerHTML = `Logged on as ${user.displayName}`;
      })
      .catch(console.error);
  });

  $('#logout').on('click', e => {
    client.logout()
      .then(() => document.querySelector('#user').innerHTML = '')
      .catch(console.error)
  });
});