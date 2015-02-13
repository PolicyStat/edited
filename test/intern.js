/* eslint-env amd */
define({
  suites: [ 'test/test' ],

  excludeInstrumentation: /^(?:test|node_modules)\//,

  tunnel: 'SauceLabsTunnel',

  capabilities: {
    'idle-timeout': 320
  },

  environments: [
    {browserName: 'chrome'},
    {browserName: 'firefox'},
    {browserName: 'internet explorer', version: ['7', '8', '9', '10', '11']},
    {browserName: 'safari'},
    {browserName: 'opera'},
    {
      browserName: 'android',
      deviceName: 'Android Emulator',
      version: ['4.0', '4.1', '4.2', '4.3', '4.4']
    },
    {browserName: 'iphone'}
  ]
})
