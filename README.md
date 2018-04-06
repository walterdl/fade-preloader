# fade-preloader

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Element that fade-in and fade-out covering the 100% of the viewport height and width. It's intended to use as preloader (or veil) that hide the underlying content in the first loading.

## Props
| Name | Type | Required | Default | Desc
|:--:|:--:|:--:|:--:|--|
|  `show` | `bool` | yes | `false` | show or hide the preloader |
| `showInmediatly` | `bool` | no | `true` | apply fade-in transition when its shows |
| `hideInmediatly` | `bool` | no | `false` | apply fade-out transition when its shows |
| `imageUrl` | `string` | no | \-\- | Image to show at top
| `className` | `string` | no | \-\- | additional className to the root container |

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
