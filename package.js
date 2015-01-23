Package.describe({
  name: '3stack:platform',
  version: '1.3.0',
  summary: 'https://github.com/bestiejs/platform.js',
  git: 'https://github.com/3stack-software/meteor-platform',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.export('platform', 'client');
  api.addFiles('platform.js', 'client');
});
