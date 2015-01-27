var localUrl = "http://localhost:8000/test/index.html"
var assertCount = 4;
var inputVal;

casper.test.begin('Test Page Structure', assertCount, function suite(test) {
  casper.start(localUrl, function() {
    test.assertHttpStatus(200, 'Test page loads with HTTP 200 status');
    test.assertTitle('alexdiliberto/form-autofill Test Page', 'Assert correct test page title');
    test.assertExists('#autofill', 'The "Autofill" button exists');
    test.assertElementCount('form > div', 15, '15 form inputfields are found');
  });

  casper.run(function() {
    test.done();
  });
});

assertCount = 16;

casper.test.begin('Test FormAutofill', assertCount, function suite(test) {
  casper.start(localUrl, function() {
    this.click('#autofill');
  });

  casper.then(function() {
    test.assertField('title', this.getFormValues('form').title);

    test.assertField('firstname', this.getFormValues('form').firstname);

    test.assertField('lastname', this.getFormValues('form').lastname);

    test.assertField('fullname', this.getFormValues('form').fullname);
    test.assertEquals(this.getFormValues('form').fullname,
      this.getFormValues('form').firstname + " " + this.getFormValues('form').lastname,
      'Fullname equals firstname + lastname');

    test.assertField('birthday', this.getFormValues('form').birthday);

    test.assertField('company', this.getFormValues('form').company);

    test.assertField('ssn', this.getFormValues('form').ssn);

    test.assertField('email', this.getFormValues('form').email);

    test.assertField('phone', this.getFormValues('form').phone);

    test.assertField('address', this.getFormValues('form').address);

    test.assertField('city', this.getFormValues('form').city);

    test.assertField('state', this.getFormValues('form').state);

    test.assertField('zip', this.getFormValues('form').zip);

    test.assertField('username', this.getFormValues('form').username);

    test.assertField('password', this.getFormValues('form').password);
  });

  casper.run(function() {
    test.done();
  });
});
