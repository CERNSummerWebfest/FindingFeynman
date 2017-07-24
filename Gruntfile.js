module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        sourceMap : true,
        sourceMapIncludeSources : true,
        sourceMapIn : 'dist/<%= pkg.name %>.js.map',
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';',
        sourceMap : true,
      },
      dist: {
        // the files to concatenate
        src: ['src/main.js', 'src/page.js', 'src/smPage.js', 'src/lvls/*.js'],
        //src: ['src/**/*.js'],
        // the location of the resulting JS file
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'src/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    
    svgmin: {
        options: {
            plugins: [{
                removeViewBox: false
            }]
        },
        dist: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'assets/',      // Src matches are relative to this path.
            src: ['**/*.svg'], // Actual pattern(s) to match.
            dest: 'dist/assets/',   // Destination path prefix.
            ext: '.svg',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          },
        ],
        }
    }
  });

  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-concat-sourcemap');

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['jshint', 'svgmin', 'concat', 'uglify']);
  grunt.registerTask('test', ['jshint']);

};
