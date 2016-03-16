define([
  'marionette',
  'bug_tracker/views/templates/bug_item.tpl'
], function (Marionette, BugItemTpl) {
  'use strict';

  var BugItemView = Marionette.ItemView.extend({
    template: BugItemTpl,

    events: {
      'click .js_bug_edit': 'editBug',
      'click .js_bug_save': 'saveBug',
      'click .bug_remove': 'removeBug',

      'input .summary-input': 'updateSummary', // I had to edit the templates and I'm not too big of a fan of referencing classes directly
      'input .description-input': 'updateDescription' // in a view (used to two-way data binding), maybe there's a better way in marionette?
    },

    templateHelpers: function () {
      return {
        errors: this.model.validationError,
      };
    },

    initialize: function () {
      if (!this.model) {
        throw new Error('BugItemView requires a model');
      }

      this.summary = this.model.get("summary");
      this.description = this.model.get("description");

      this.listenTo(this.model, 'change', this.modelChanged);
      this.listenTo(this.model, 'invalid', this.showError);
    },

    modelChanged: function() {
      this.summary = this.model.get("summary");
      this.description = this.model.get("description");

      this.render();
    },

    editBug: function() {
      this.model.set('editing', true);
    },

    saveBug: function() {
      this.model.set({
        summary: this.summary,
        description: this.description
      });

      if(this.model.isValid()) {
        this.model.set('editing', false);
        this.model.save();
      }
    },

    // In a real application this would need either confirmation (eh) or undo-ing (yay)
    removeBug: function() {
      // 'destroy' event will bubble up and automatically remove this from any collections.
      this.model.destroy();
    },

    showError: function() {
      this.render();
    },

    // Store these in temporary variables, which are then set in the model in saveBug. 
    // If the bug is saved in these, then the view get rerendered and it's horrible.
    // There might be a better way to do this since I'm unfamiliar with backbone and marionette
    updateSummary: function(event) {
      this.summary = event.target.value;
    },

    updateDescription: function(event) {
      this.description = event.target.value;
    }

    // I'm actually not sure what needs to be implemted for this? saveBug handles the validation here, and the UI acts just fine.
    // @TODO implement function to handle an 'invalid' event from the model

  });

  return BugItemView;
});
