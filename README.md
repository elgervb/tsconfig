
[![Build Status](https://travis-ci.org/elgervb/tslint-config-elgervb.svg?branch=master)](https://travis-ci.org/elgervb/tslint-config-elgervb)
[![devDependencies Status](https://david-dm.org/elgervb/tslint-config-elgervb/dev-status.svg)](https://david-dm.org/elgervb/tslint-config-elgervb?type=dev)


# elgervb TSLint config

## installation

```
npm install tslint-config-elgervb
```
or
```
yarn add tslint-config-elgervb
```

## usage

Add the following to your `tslint.json` file

```
{
  "rulesDirectory": [
    "node_modules/tslint-config-elgervb",
    "node_modules/tslint-config-elgervb/codelyzer"
  ],
}
```

# TSCONFIG
```
{
  "extends": "node_modules/tslint-config-elgervb/configs/base",
  "files": [
    ...
  ]
}
```


# links

* [tslint](https://palantir.github.io/tslint/)
* [changelog](https://github.com/palantir/tslint/blob/master/CHANGELOG.md)
