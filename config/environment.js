'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'car-sale',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      }
      ,
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebase: {
      apiKey: "AIzaSyB9ZRWO5cukLjZEQm9qHbN-UwrT0OB7yv0",
      authDomain: "meal-app-c0891.firebaseapp.com",
      databaseURL: "https://meal-app-c0891-default-rtdb.firebaseio.com",
      projectId: "meal-app-c0891",
      storageBucket: "meal-app-c0891.appspot.com",
      messagingSenderId: "1037168011728",
      appId: "1:1037168011728:web:f71f6c94cf76462ebfb1d5",
      measurementId: "G-Y0CGCD6WLJ"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  }
    ;

  if (environment === 'development'
  ) {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV.MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYWhyaXN0aWFuIiwiYSI6ImNraHA2em1xZjBhbXoyc21zb2h6aG5jMWwifQ.TUTafDjrLDZ2X79fuoEVXg'

  return ENV;
}
  ;
