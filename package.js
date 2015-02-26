var auto = require('auto-package')
var content = auto.content
var policystat = require('policystat')

content.name = 'edited'
auto.versionFile()
content.description = 'Listens on editable elements and calls back on significant changes'
content.main = 'lib/Edited/index.js'
content.dependencies = {
  'add-event-handler': '^1.0.0',
  'dom-events': '^0.1.1',
  'keycode': '^2.0.0',
  'is_element': '^0.0.11'
}
content.devDependencies = {
  mightyiam: '^1.1.5',
  policystat: '^1.1.0',
  'policystat-sauce-browsers': '*',
  'auto-package': '^0.2.0',
  'es5-shim': '^4.1.0',
  'foreach': '^2.0.5',
  'isnode': '0.0.1',
  'jasmine-core': '^2.2.0',
  'jsdom': '^3.1.0',
  'karma': '^0.12.31',
  'karma-browserify': '^3.0.2',
  'karma-chrome-launcher': '^0.1.7',
  'karma-cli': '0.0.4',
  'karma-firefox-launcher': '^0.1.4',
  'karma-jasmine': '^0.3.5',
  'keysim': '^1.1.2',
  'randomatic': '^1.1.0',
  'selenium-server': '^2.44.0',
  'standard': '^2.4.4',
  'license-generator': '^0.0.13',
  'verb-cli': '^0.4.4'
}
content.repository = {
  'type': 'git',
  'url': 'http://github.com/mightyiam/edited.git'
}
content.scripts = {
  'license': 'license-generator install bsd-3-clause -n "' + policystat.name.pretty + '"',
  'docs': 'verb',
  'lint': 'standard',
  'test-browsers': 'karma start',
  'test': 'npm run license && npm run docs && npm run lint && npm run test-browsers'
}
content.keywords = [
  'contentEditable',
  'designMode',
  'undo',
  'redo'
]
content.author = require('mightyiam').authorStr
content.license = {
  type: 'MIT'
}
content.copyright = policystat.copyrightNotice
