Package.describe({
  name: '3stack:platform',
  version: '1.3.0_1',
  summary: 'https://github.com/bestiejs/platform.js',
  git: 'https://github.com/3stack-software/meteor-platform',
  documentation: 'README.md'
});

Npm.depends({
  "platform": "1.3.0"
});

Package.onUse(function(api){
  api.use('cosmos:browserify@0.4.0');
  api.export('Platform', 'client');
  api.addFiles('platform.browserify.js', 'client');
});
