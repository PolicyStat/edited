/* eslint-env amd */
define(function() {
  var local = typeof process === 'undefined' ? null : !process.env.CI

  return {
    suites: ['test/test'],

    excludeInstrumentation: /^(?:test|node_modules)\//,

    tunnel: local ? 'NullTunnel' : 'SauceLabsTunnel',

    capabilities: {
      'idle-timeout': 320
    },

    environments: local ? [{browserName: 'chrome'}] : [
      {browserName: 'chrome'},
      {browserName: 'firefox'},
      // should test with IE 7 & 8, as well:
      // https://github.com/mightyiam/edited/issues/7
      {browserName: 'internet explorer', version: ['9', '10', '11']},
      {browserName: 'safari'},
      {browserName: 'opera'},
      {
        browserName: 'android',
        deviceName: 'Android Emulator',
        version: ['4.0', '4.1', '4.2', '4.3', '4.4']
      },
      {browserName: 'iphone'}
    ]
  }
})
