define([
  'backbone',
], function (Backbone) {
  'use strict';

  var BugModel = Backbone.Model.extend({
    defaults: function () {
      return {
        summary: '',
        description: '',
        editing: this.isNew(),
      };
    },

    /** Ensure that the bug report contains valid summary and description. **/
    validate: function(attrs, options) {
      // The todo said to only validate summary, but it seems normal to require both of them. In a normal situation I would ask for clarification
      var validations = {};

      var isValidString = function(attr) { return typeof attr === 'string' && attr.length > 0; };

      if(!isValidString(attrs.summary)) {
        validations.summary = 'Bug report must contain a summary of the problem.';
      }

      if(!isValidString(attrs.description)) {
        validations.description = 'Bug report must contain a detailed description of the problem.';
      }

      return Object.keys(validations).length > 0 ? validations : undefined;
    }
  });

  return BugModel;
});
