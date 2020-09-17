var hljs = require('./core');

hljs.registerLanguage('xml', require('./languages/xml'));
hljs.registerLanguage('bash', require('./languages/bash'));
hljs.registerLanguage('csharp', require('./languages/csharp'));
hljs.registerLanguage('css', require('./languages/css'));
hljs.registerLanguage('markdown', require('./languages/markdown'));
hljs.registerLanguage('dart', require('./languages/dart'));
hljs.registerLanguage('dockerfile', require('./languages/dockerfile'));
hljs.registerLanguage('groovy', require('./languages/groovy'));
hljs.registerLanguage('gradle', require('./languages/gradle'));
hljs.registerLanguage('java', require('./languages/java'));
hljs.registerLanguage('javascript', require('./languages/javascript'));
hljs.registerLanguage('json', require('./languages/json'));
hljs.registerLanguage('kotlin', require('./languages/kotlin'));
hljs.registerLanguage('objectivec', require('./languages/objectivec'));
hljs.registerLanguage('plaintext', require('./languages/plaintext'));
hljs.registerLanguage('python', require('./languages/python'));
hljs.registerLanguage('smali', require('./languages/smali'));
hljs.registerLanguage('swift', require('./languages/swift'));
hljs.registerLanguage('ruby', require('./languages/ruby'));
hljs.registerLanguage('yaml', require('./languages/yaml'));
hljs.registerLanguage('typescript', require('./languages/typescript'));
hljs.registerLanguage('go', require('./languages/go'));
hljs.registerLanguage('handlebars', require('./languages/handlebars'));
hljs.registerLanguage('http', require('./languages/http'));
hljs.registerLanguage('php', require('./languages/php'));

module.exports = hljs;