'use strict';
var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');
var isDoc = require('../');

test(function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixtures/test.doc'), 0, 8, function (err, buf) {
		t.assert(!err, err);
		t.assert(isDoc(buf));
	});
});
