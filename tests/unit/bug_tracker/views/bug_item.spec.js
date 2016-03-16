define([
  'backbone',
  'bug_tracker/views/bug_item',
  'bug_tracker/models/bug'
], function (Backbone, BugItemView, BugModel) {
  'use strict';

  describe('BugItemView', function () {
    var view, model;

    beforeEach(function () {
      model = new BugModel();
      model.save = function() {}; // No server when testing
  
      view = new BugItemView({
        model: model,
      });
    });

    it('should exist', function () {
      expect(view).toBeDefined();
    });

    it('should have empty properties to start with', function() {
      expect(view.model.get('summary')).toBe('');
    });

    it('should not update the model until saveBug is called', function() {
      view.updateSummary({ target: { value: 'summary here' } });

      expect(view.model.get('summary')).toBe('');
    });

    it('should update the model with the view values when saveBug is called', function() {
      view.updateSummary({ target: { value: 'summary here' } });
      view.updateDescription({ target: { value: 'description here' } });

      view.saveBug();

      expect(view.model.get('summary')).toBe('summary here');
      expect(view.model.get('description')).toBe('description here');
    });

    it('should stop editing when the bug is saved', function() {
      view.updateSummary({ target: { value: 'summary here' } });
      view.updateDescription({ target: { value: 'description here' } });

      view.saveBug();

      expect(view.model.get('editing')).toBe(false);
    });

    it('should not stop editing if there is a validation error', function() {
      view.saveBug();

      expect(view.model.get('editing')).toBe(true);
    });
  });
});
