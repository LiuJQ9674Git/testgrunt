module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      ignore_warning: {
        options: {
          '-W015': true,
        },
        src: ['src/*.js'],
      },
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'src/*.js'
      ]
    },//jshint over

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/*.js', 'src/cat.js'],
        dest: 'dest/libs.js'
      }
    },//concat over

    uglify: {
      options: {
        banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/*.js',
        dest: 'build/test.min.js'
      }
    },//uglify over

    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '**',
        dest: 'mirc/',
      },
    },//copy over

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'release/css',
          src: ['*.css', '!*.min.css'],
          dest: 'release/css',
          ext: '.min.css'
        }]
      }
    }//
  });

  // 加载提供"jshint"任务的插件
  grunt.loadNpmTasks('grunt-contrib-jshint');

  //链接js文件
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 加载提供"uglify"任务的插件
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 加载提供"copy"任务的插件
  grunt.loadNpmTasks('grunt-contrib-copy');

  // 加载提供"cssmin"任务的插件
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // 默认任务
  grunt.registerTask('default', [ 'jshint','concat','uglify','copy','cssmin']);
}