define(
  ["./chance","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Chance = __dependency1__["default"] || __dependency1__;

    var chance = new Chance();
    var title = function() { return chance.prefix(); };
    var firstname = function() { return chance.first(); };
    var lastname = function() { return chance.last(); };
    var email = function() { return chance.email({ domain: 'example.com' }); };
    var address = function() { return chance.address({ short_suffix: true }); };
    var city = function() { return chance.city(); };
    var state = function() { return chance.state(); };
    var zip = function() { return chance.zip(); };
    var phone = function() { return chance.phone(); };
    var ssn = function () {
      var ssn_pool = "1234567890";
      return chance.string({pool: ssn_pool, length: 3}) + '-' +
             chance.string({pool: ssn_pool, length: 2}) + '-' +
             chance.string({pool: ssn_pool, length: 4});
    };
    var capitalword = function() { return chance.capitalize(chance.word()); };
    var password = function() { return chance.string({ length: 10, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#' }); };
    var birthday = function() { return chance.birthday({ string: true }); };
    var formnametable = function() {
      var first = firstname(),
          last = lastname(),
          full = first + " " + last;

      return {
        "title"       : title(),
        "firstname"   : first,
        "lastname"    : last,
        "fullname"    : full,
        "email"       : email(),
        "address"     : address(),
        "city"        : city(),
        "state"       : state(),
        "zip"         : zip(),
        "phone"       : phone(),
        "ssn"         : ssn(),
        "company"     : capitalword(),
        "birthday"    : birthday(),
        "username"    : capitalword(),
        "password"    : password()
      };
    };

    var fill = function() {
      var form_names = formnametable();

      Object.keys(form_names).forEach(function(name) {
        var input = window.document.querySelector("form input[name='" + name + "']") ||
                    window.document.querySelector("form select[name='" + name + "']") ||
                    window.document.querySelector("form textarea[name='" + name + "']");

        input && input.type !== "hidden" && (input.value = form_names[name]);
      });
    };

    __exports__.fill = fill;
  });