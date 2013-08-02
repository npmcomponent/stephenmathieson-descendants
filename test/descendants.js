
describe('descendants', function () {
  var descendants = require('descendants'),
      assert = require('assert'),
      each = require('each'),
      indexof = require('indexof');

  var fixture = document.getElementById('fixture');


  it('should return all descendants (direct == false)', function () {
    var expected = fixture.getElementsByTagName('*'),
        actual = descendants(fixture);

    each(expected, function (e) {
      var i = indexof(actual, e);
      assert(i !== -1);
    });
  });

  describe('given direct == true', function () {
    it('should return only the direct descendants', function () {
      var elements = descendants(fixture, true);

      each(elements, function (e) {
        assert(e.className == 'first');
      });
    });
  });
});
