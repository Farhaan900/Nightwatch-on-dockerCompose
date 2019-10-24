module.exports = {
    '@disabled': false,
  
    'PV test part one' : function (client) {
      client
        .url('http://192.168.56.1:3000')
        .waitForElementPresent('body', 1000);
    },
  
    'part two' : function(client) {
      client
        // .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
        // .pause(1000)
        .assert.containsText('.ant-tabs-nav-container', 'Element Details')
        
    },

    'part three' : function(client) {
        client
          // .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
          // .pause(1000)
          .assert.containsText('.ant-tabs-nav-container', 'Error')
          .end();
      }
  };