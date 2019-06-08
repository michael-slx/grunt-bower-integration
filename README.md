# Why this plug-in is no longer maintained ...

Although Bower continues to be actively developed, its developers recommend using [**Yarn**](https://yarnpkg.com/) instead. [The background to this decision is explained on the Bower website.](https://bower.io/blog/2017/how-to-migrate-away-from-bower/)
For this reason, this plug-in is **no longer being maintained**.
Instead, manually install required front-end components with **Yarn** and then process them as usual with Grunt.

# grunt-bower-integration

> Installs bower components without a bower.json file

## Getting Started
This plugin requires Grunt `~1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install xcuipir/grunt-bower-integration#v0.1.0 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bower-integration');
```

## The "bower_integration" task

### Overview
In your project's Gruntfile, add a section named `bower_integration` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bower_integration: {
    options: {
      // Task-specific options go here.
      // (currently none available)
    },
    your_target: {
      // Target-specific file lists and/or options go here.
      dependencies: [
        // Your bower dependencies go here
      ]
    },
  },
});
```

### Options

#### Target-specific

The `target` object mentioned below represents any of your defined targets (such as the `your_target` object in the example given above).

##### `target.dependencies`

- **Default**: `[]` _(empty array)_
- **Type**: Array of strings

An array of strings whereby each element is one dependency package to install. Any [Bower endpoint syntax](https://bower.io/docs/api/#install) may be used.

### Usage Examples

#### Downloading jQuery
In this example, the latest stable version of jQuery will be downloaded and installed in the `bower_components` directory

```js
grunt.initConfig({
  bower_integration: {
    test_jQ: {
      dependencies: [
        "jQuery"
      ]
    }
  }
});
```

## Contributing
If you have any suggestions, find bugs or want to propose additional features, feel free to post a issue on the issue tracker. Help in form of forks & PRs is appreciated. In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.  <del>Lint</del><ins>(currently not working)</ins> and test your code using [Grunt](http://gruntjs.com/).

## Release History
### Version 0.1.0 _(released on 07-05-2017)_

- Initial release
