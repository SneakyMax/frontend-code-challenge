define([
  'backbone',
  'bug_tracker/views/bug_collection'
], function (Backbone, BugCollectionView) {
  'use strict';

  describe('BugCollectionView', function () {
    var view, collection;

    beforeEach(function () {
      collection = new Backbone.Collection();

      view = new BugCollectionView({
        collection: collection,
      });
    });

    it('should exist', function () {
      expect(view).toBeDefined();
    });

    it('should add a bug to the collection when addBug is called', function() {
      view.addBug();
      expect(collection.length).toBe(1);
    });

    it('should add an empty bug to the collection when addBug is called', function() {
      view.addBug();
      var bug = collection.at(0);

      expect(bug.get('summary')).toBe('');
      expect(bug.get('description')).toBe('');
    });

    it('should have an invalid bug when a new bug is added', function() {
      view.addBug();
      var bug = collection.at(0);
      expect(bug.isValid()).toBe(false);
    });
  });
});
