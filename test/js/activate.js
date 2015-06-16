QUnit.test( "get redirect login", function( assert ) {
  Mobile = new Desktop();
  assert.ok( !get_redirect_login(), "Passed!" );
});

QUnit.test( "get redirect login on Android", function( assert ) {
  Mobile = new TestMobile();
  assert.equal( get_redirect_login(), "login");
});

QUnit.test( "get redirect password", function( assert ) {
  Mobile = new Desktop();
  assert.ok( !get_redirect_password(), "Passed!" );
});

QUnit.test( "get redirect password on Android", function( assert ) {
  Mobile = new TestMobile();
  assert.equal( get_redirect_password(), "pass");
});

function TestMobile() {}

TestMobile.prototype.getRedirectLogin = function() {
  return "login";
};

TestMobile.prototype.getRedirectPassword = function() {
  return "pass";
};