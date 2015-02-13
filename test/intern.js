/* eslint-env amd */
define({
  suites: [ 'test/test' ],

  excludeInstrumentation: /^(?:test|node_modules)\//,

  tunnel: 'SauceLabsTunnel',

  capabilities: {
    'selenium-version': '2.41.0'
  },

  environments: [
    {browserName: 'chrome'},
    {browserName: 'firefox'},
    {browserName: 'internet explorer', version: ['7', '8', '9', '10', '11']},
    {browserName: 'safari'},
    {browserName: 'opera'},
    {browserName: 'android'},
    {browserName: 'iphone'}
  ]
})
