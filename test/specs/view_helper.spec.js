/**
 * Module : View Helper
 */

define(['modules/viewHelper'], function (viewHelper) {
	'use strict';

	describe('viewHelper', function () {

		it('is available', function () {
			expect(viewHelper).not.toBe(null);
		});

		it('cleans the title', function() {
			expect(viewHelper.cleanTitle('this-title')).toBe('This Title');
		});

	});
});
