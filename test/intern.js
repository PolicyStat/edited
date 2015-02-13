/* eslint-env amd */
define({
  suites: [ 'test/test' ],

  excludeInstrumentation: /^(?:test|node_modules)\//,

  tunnel: 'SauceLabsTunnel',

  environments: [
    {browserName: 'chrome'}
  ]
})
