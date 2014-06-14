// XXX it'd be cool to also test that the right thing happens if options
// *are* validated, but Accouns.ui._options is global state which makes this hard
// (impossible?)
Tinytest.add('accounts-ui - config validates keys', function (test) {
  test.throws(function () {
    Accounts.ui.config({foo: "bar"});
  });

  test.throws(function () {
    Accounts.ui.config({passwordSignupFields: "不是一个有效的设置"});
  });

  test.throws(function () {
    Accounts.ui.config({requestPermissions: {facebook: "不是一个数组"}});
  });
});

