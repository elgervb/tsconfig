
[![Build Status](https://travis-ci.org/elgervb/tslint-config.svg?branch=master)](https://travis-ci.org/elgervb/tslint-config)
[![devDependencies Status](https://david-dm.org/elgervb/tslint-config/dev-status.svg)](https://david-dm.org/elgervb/tslint-config?type=dev)


# elgervb TSLint config

## installation

```
npm install elgervb-tslint-config
```
or
```
yarn add elgervb-tslint-config
```

## usage

Add the following to your `tslint.json` file

```
{
  "rulesDirectory": [
    "node_modules/elgervb-tslint-config",
    "node_modules/elgervb-tslint-config/codelyzer"
  ],
}
```

# TSCONFIG
```
{
  "extends": "node_modules/elgervb-tslint-config/configs/base",
  "files": [
    ...
  ]
}
```


# links

* [tslint](https://palantir.github.io/tslint/)
* [changelog](https://github.com/palantir/tslint/blob/master/CHANGELOG.md)
