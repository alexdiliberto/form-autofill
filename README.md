#form-autofill

[![npm badge][npm-badge-png]][npm-url]

[![github release versions][github-release-svg]][github-release-url]
[![npm downloads per month][npm-dm-badge-svg]][npm-url]

Autofill your web forms with random test data for quick and easy testing.

![form-autofill-demo](http://recordit.co/IQyjCsR7gh/gif)

### Install
```bash
npm install --save-dev form-autofill
```

### Run (Global Scope)
```js
<script src="./node_modules/form-autofill/dist/globals/main.js"></script>
<script>
  FormAutofill.fill();
</script>
```

### Contribute
```bash
bower i
npm i
./build.sh
```

### Test
```bash
ws;                           #Start localserver at http://localhost:8000
casperjs test test/runner.js; #Execute CasperJS test runner
```

[npm-url]: https://npmjs.com/package/form-autofill
[github-release-url]: https://github.com/alexdiliberto/form-autofill/releases
[npm-dm-badge-svg]: https://img.shields.io/npm/dm/form-autofill.svg
[npm-badge-png]: https://nodei.co/npm/form-autofill.png?downloads=true&stars=true
[github-release-svg]: https://img.shields.io/github/release/alexdiliberto/form-autofill.svg
