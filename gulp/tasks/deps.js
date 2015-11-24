'use strict';

var
  _ = require('lodash'),
  fs = require('fs'),
  fse = require('fs-extra')
  ;

function mapToNodeModules(list, min, suffix) {
  return _.map(list, function(item) {
    if (min && !fs.existsSync('node_modules/' + item + '.min.' + suffix)) {
      return 'node_modules/' + item + '.' + suffix;
    }
    return 'node_modules/' + item + '.' + (min ? 'min.' : '') + suffix;
  });
}

function compile(type, production) {
  return gulp.src(mapToNodeModules(config.deps[type], production, type))
    .pipe(plugins.pipes[type].deps({
      prod: type !== 'css' ? production : false,
      name: config.deps.name + (production ? '.min' : '')
    }))
    .pipe(gulp.dest(config.deps.dest));
}

gulp.task('deps:js:dev', function() {
  return compile('js');
});
gulp.task('deps:js:prod', function() {
  return compile('js', true);
});

gulp.task('deps:css:dev', function() {
  return compile('css');
});
gulp.task('deps:css:prod', function() {
  return compile('css', true);
});