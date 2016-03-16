define([
  'bug_tracker/models/bug'
], function (BugModel) {
  'use strict';

  describe('BugModel', function () {
    var model;
    beforeEach(function () {
      model = new BugModel();
    });

    it('should exist', function () {
      expect(model).toBeDefined();
    });

    it('is not valid to begin with', function() {
      expect(model.isValid()).toBe(false);
    });

    it('should validate for a valid model', function() {
      model.set({
        summary: 'This is a valid bug summary.',
        description: 'This is a detailed description of the bug.'
      });

      expect(model.isValid()).toBe(true);
    });

    it('should not validate if missing a summary', function() {
      model.set({ description: 'This is a detailed description of the bug.' });

      expect(model.isValid()).toBe(false);
    });

    it('should not validate if missing a description', function() {
      model.set({ summary: 'This is a valid bug summary.' });

      expect(model.isValid()).toBe(false);
    });
  });
});
