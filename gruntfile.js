
module.exports=function(grunt){
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      watch:{
         sass:{
            files:['css/scss/*.scss'],
            tasks:['sass','autoprefixer'],
            options:{livereload:true}
         }
      },
      cssmin:{
        my_target:{
            files:[{
              expand: true,
              cwd: 'css/',
              src:['*.css','!*.min.css'],
              dest:'css/',
              ext:'.min.css'
            }]
        }
      },
    
    sass:{
      dist:{
        files:{'css/style.css':'css/scss/style.scss'}
      }
    },
    
    autoprefixer:{
        options: {
          browsers: ['last 15 versions', 'ie 8', 'ie 9']
        },
        single_file: {
          options: {
            // Target-specific options go here.
          },
          src: 'css/style.css',
          dest: 'css/style.css'
        },
       sourcemap: {
            options: {
                map: true
            }
        }
    }
    
});
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.registerTask('default',['watch']);
}
