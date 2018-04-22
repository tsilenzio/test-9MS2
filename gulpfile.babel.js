import gulp from 'gulp';
import { resolve } from 'path';
import del from 'del';
import gutil from 'gulp-util';
import webpack from 'webpack';
import gulpWebpack  from 'webpack-stream';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from "./webpack.config.babel.js";

// TODO: Implement testing functionality
gulp.task('test', () => {

});

// TODO: Implement test watching functionality
gulp.task('test:watch', () => {

});

// TODO: Implement linting functionality
gulp.task('lint', () => {

});

// TODO: Implement lint watching functionality
gulp.task('lint:watch', () => {

});

// Delete the build and dist directories
gulp.task('clean', () => {
  return del(['./src/server/public/assets/scripts/bundle.*'], {
    force: true
  });
});

// Generate production ready scripts
gulp.task('scripts', (callback) => {
  return gulp.src('./src/client/index.js')
    .pipe(gulpWebpack(webpackConfig, webpack, function (err, stats) {
      if (err) {
        throw new gutil.PluginError('build', err);
      } else if (stats.hasErrors()) {
        throw new gutil.PluginError('build', stats.toString({
          colors: true,
          reasons: true
        }));
      }

      gutil.log('[build] Completed\n' + stats.toString({
        assets: true,
        chunks: false,
        chunkModules: false,
        colors: true,
        hash: false,
        timings: false,
        version: false
      }));
      callback();
    }))
    .pipe(gulp.dest('./src/server/public/assets/scripts'));
});

// TODO: Implement default functionality
gulp.task('styles', () => {

});

gulp.task('build',
  gulp.series('clean', gulp.parallel('scripts'))
);

// TODO: Implement default functionality
gulp.task('default', () => {

});

gulp.task('dev', () => {
  new WebpackDevServer(webpack(Object.assign({}, webpackConfig, {
    devtool: 'source-map',
    cache: false,
    entry: [
      //'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './client/index.js',
    ],
    mode: 'development',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
  })), {
    hot: true,
    contentBase: 'src/server/public/',
    publicPath: '/assets/scripts/',
    stats: {
      colors: true
    },
  }).listen(3000, "localhost", function (err) {
    if (err) {
      throw new gutil.PluginError("webpack-dev-server", err);
    }
    
    gutil.log(
      "[webpack-dev-server]",
      "http://localhost:3000/webpack-dev-server/index.html");
  });
});

// TODO: Implement development watching functionality
gulp.task('dev:watch', () => {

});
