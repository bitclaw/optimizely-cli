//Test the init command
var fs = require('fs');

var assert = require('chai').assert;
var nexpect = require('nexpect');
var quickTemp = require('quick-temp');

var utils = require('../utils');

var options = {
  'cwd': __dirname
};
var directory = {};

describe('Init Project Module' , function () {
  before(function (done) {
    //Create the temporary project folder and enter it
    quickTemp.makeOrRemake(directory, 'project');
    options.cwd = directory.project;
    //Initialize the project
    utils.init(options, done, []);
  });
  after(function (done) {
    quickTemp.remove(directory, 'project');
    done();
  })
  it('Should create a project.json file', function (done) {
    fs.exists(directory.project + '/project.json', function (exists) {
      assert(exists, 'project.json not found');
      done();
    });
  });
})