/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dlight-mentor',
    environment: environment,
    contentSecurityPolicy: { 
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com http://localhost:4005" 
    },
    firebase: 'https://dlight-mentor.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    'ember-simple-auth-token': {
      // get token
      serverTokenEndpoint: '/api/auth/get-token',
      // refresh token
      serverTokenRefreshEndpoint: '/api/auth/refresh-token',
      // timeFactor * refreshLeeway = milliseconds before token refresh
      refreshAccessTokens: true,
      timeFactor: 1000,  // convert expirty time to milliseconds, because it is comming in seconds
      refreshLeeway: 300 // seconds before expiry
    },

    'ember-simple-auth': {
      authorizer: 'simple-auth-authorizer:jwt'
    },
    
    torii: {
      providers: {
        'google-oauth2-bearer': {
          apiKey: '714040861378-d1bd207prbds6c0liull39dr1u7ot6dg.apps.googleusercontent.com',
          redirectUri: 'http://dev.goalslog.com'
        //   ,scope: 'profile'
        //   scope: 'email https://www.googleapis.com/auth/drive.appdata'
        },
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }
  
  if (environment === 'prod') {
    ENV.torii.providers['google-oauth2-bearer'].redirectUri = 'http://prod.goalslog.com';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // ENV.locationType = 'hash';
    // ENV.rootUrl = '/dlight-mentor';
    ENV.torii.providers['google-oauth2-bearer'].redirectUri = 'http://goalslog.com';
  }

  return ENV;
};
