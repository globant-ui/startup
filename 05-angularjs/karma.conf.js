module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js', //Don't test external libraries
      'app/bower_components/angular-route/angular-route.js',//Don't test external libraries
      'app/bower_components/angular-mocks/angular-mocks.js',//Don't test external libraries
      'app/bower_components/ngstorage/ngStorage.js',//Don't test external libraries
      'app/JS/controllers.js',
      'app/JS/test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
