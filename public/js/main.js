require.config({
  paths: {
    'backbone': 'vendor/backbone',
    'jadeRuntime': 'vendor/jade_runtime',
    'jquery': 'vendor/jquery',
    'marionette': 'vendor/backbone.marionette',
    'underscore': 'vendor/underscore',
    'jade': 'vendor/jade_runtime'
  },
});

requirejs([
  'jquery',
  'bug_tracker/bug_tracker'
], function($, BugTracker) {
  'use strict';
  $.ajaxSetup({cache: false});
  new BugTracker();
});
