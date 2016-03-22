module.exports = function(config){
  config.set({

    basePath : './',

    //Sorry for said that is was not right. It is ok! However, paths is no correct. 
    files : [
      'bower_components/angular/angular.js',            
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/ngstorage/ngStorage.js',
      'JS/controllers.js',
      'JS/test.js'
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
