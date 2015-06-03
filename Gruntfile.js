/*
 * Generated on 2015-05-28
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2015 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      css: {
        files: ['<%= config.src %>/{assets,js}/{,*/}*.{less,css}'],
        tasks: ['less']
      },
      assets: {
        files: ['<%= config.src %>/{assets,js}/{,*/}*.{js,png,jpg,jpeg,gif,webp,svg,otf}'],
        tasks: ['copy']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.less',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ['<%= config.src %>/assets/']
        },
        files: {
          '<%= config.dist %>/assets/css/min-main.css': '<%= config.src %>/assets/min-main.less',
          '<%= config.dist %>/assets/css/large-main.css': '<%= config.src %>/assets/large-main.less',
          '<%= config.dist %>/assets/css/min-topnav.css': '<%= config.src %>/assets/min-topnav.less',
          '<%= config.dist %>/assets/css/large-topnav.css': '<%= config.src %>/assets/large-topnav.less',
          '<%= config.dist %>/assets/css/slider.css': '<%= config.src %>/assets/slider.less'
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs',
          plugins: ['assemble-contrib-permalinks','assemble-contrib-sitemap']
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    copy: {
      bootstrap: {
        expand: true,
        cwd: 'bower_components/bootstrap/dist/',
        src: '**',
        dest: '<%= config.dist %>/assets/'
      },
      jquery: {
        expand: true,
        cwd: 'bower_components/jquery/dist/',
        src: 'jquery.min.js',
        dest: '<%= config.dist %>/assets/js'
      },
      assets: {
        expand: true,
        cwd: 'src/assets/',
        src: 'img/*',
        dest: '<%= config.dist %>/assets/css/'
      },
      fonts: {
        expand: true,
        cwd: 'src/assets/',
        src: 'fonts/**',
        dest: '<%= config.dist %>/assets/'
      },
      js: {
        expand: true,
        cwd: 'src/js/',
        src: '**',
        dest: '<%= config.dist %>/assets/js/'
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}']

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'less',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
