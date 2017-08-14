module.exports = {
  root: './build',
  content: './content.json',
  template: './source/template/**/*.pug',
  src: {
    pug: './source/template/pages/*.pug',
    style: './source/style/**/*.scss',
    img: './source/img/**/*.*',
    fonts: './source/fonts/**/*.*'
  },
  dist: {
    css: '/assets/css',
    js: '/assets/js',
    img: '/assets/img',
    fonts: '/assets/fonts'
  },
  autoprefixerConfig: ['last 15 version']
};