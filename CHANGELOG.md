# Changelog

> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)

# [1.5.0](https://github.com/viewar/config-eslint/compare/v1.4.0...v1.5.0) (2019-10-15)


### Bug Fixes

* **jsx-filename-extension:** add '.js' to allowed file extensions ([4ac02c4](https://github.com/viewar/config-eslint/commit/4ac02c4631595299a3c530d26cc459a9064e655e))
* **lint:** config and src path ([256f48c](https://github.com/viewar/config-eslint/commit/256f48ccc3a20126a0c64ee084640fcb449f39a7))

- **CI:** allow dependabot PRs to run pipeline ([6fe8e83](https://github.com/viewar/config-eslint/commit/6fe8e83199c258a6bc956acd712d0e0690d3fa31))
- **deps:** fix babelregister bug ([0db6f48](https://github.com/viewar/config-eslint/commit/0db6f480ed55678f13403b2317558683f76c1ca8))
- **CI:** readd test job (+ trigger CI) ([45c2c4b](https://github.com/viewar/config-eslint/commit/45c2c4b2d76d8223e3f83e25aa8690e1df2900d8))
- **getResolveConfigPath:** return false on catched MODULE_NOT_FOUND ([e8814a2](https://github.com/viewar/config-eslint/commit/e8814a2a6d9a316f865e7c0758d2751e78329973))
- **release:** version number after reset ([fdedf32](https://github.com/viewar/config-eslint/commit/fdedf324ba6dbcb6df6b1b8417e8b6fcdf9687de))

### Features

* **/prettier:** export `prettier.config.js` + added test ([a383a6d](https://github.com/viewar/config-eslint/commit/a383a6daabf218b6a0502992e8eb82c9d90995e4))

# Changelog

> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)

# [1.4.0](https://github.com/viewar/config-eslint/compare/v1.3.0...v1.4.0) (2019-10-11)

# [1.3.0](https://github.com/viewar/config-eslint/compare/v1.2.2...v1.3.0) (2019-09-23)

- **CI:** allow dependabot PRs to run pipeline ([6fe8e83](https://github.com/viewar/config-eslint/commit/6fe8e83199c258a6bc956acd712d0e0690d3fa31))
- **deps:** fix babelregister bug ([0db6f48](https://github.com/viewar/config-eslint/commit/0db6f480ed55678f13403b2317558683f76c1ca8))
- **CI:** readd test job (+ trigger CI) ([45c2c4b](https://github.com/viewar/config-eslint/commit/45c2c4b2d76d8223e3f83e25aa8690e1df2900d8))
- **getResolveConfigPath:** return false on catched MODULE_NOT_FOUND ([e8814a2](https://github.com/viewar/config-eslint/commit/e8814a2a6d9a316f865e7c0758d2751e78329973))
- **release:** version number after reset ([fdedf32](https://github.com/viewar/config-eslint/commit/fdedf324ba6dbcb6df6b1b8417e8b6fcdf9687de))

### Features

- **semantic-release:** deploy per BB master push ([678dbb6](https://github.com/viewar/config-eslint/commit/678dbb6bc8d70d3c90be9bbc31bc94491ea6aa26))
- **semantic-release:** runs per CI on branch "next" ([#2](https://github.com/viewar/config-eslint/issues/2)) ([6e6bb17](https://github.com/viewar/config-eslint/commit/6e6bb17f88117a266ba9d913c913a9db776f0ea2))
- **CI:** use travis and migrate to /viewar ([#1](https://github.com/viewar/config-eslint/issues/1)) ([f58c051](https://github.com/viewar/config-eslint/commit/f58c051e624f3d6061936cb48633674f97192267))

# Changelog

> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)

# [1.3.0](https://github.com/viewar/config-eslint/compare/v1.2.2...v1.3.0) (2019-09-23)

### Features

- **react-rules:** add first draft ([ee2657e](https://github.com/viewar/config-eslint/commit/ee2657e))

## [1.2.2](https://github.com/viewar/config-eslint/compare/v1.2.1...v1.2.2) (2019-09-20)

### Bug Fixes

- **resolveConfig:** use fallback resolveConfig ([f549e4e](https://github.com/viewar/config-eslint/commit/f549e4e))

## [1.2.1](https://github.com/viewar/config-eslint/compare/v1.2.0...v1.2.1) (2019-09-19)

### Bug Fixes

- **README:** change install URL to github ([febb43c](https://github.com/viewar/config-eslint/commit/febb43c))

# [1.2.0](https://github.com/viewar/config-eslint/compare/v1.1.0...v1.2.0) (2019-09-18)

### Bug Fixes

- **CI:** readd test job (+ trigger CI) ([45c2c4b](https://github.com/viewar/config-eslint/commit/45c2c4b))
- **release:** version number after reset ([fdedf32](https://github.com/viewar/config-eslint/commit/fdedf32))

### Features

- **semantic-release:** runs per CI on branch "next" ([#2](https://github.com/viewar/config-eslint/issues/2)) ([6e6bb17](https://github.com/viewar/config-eslint/commit/6e6bb17))

# 1.1.0 (2019-09-17)

### Bug Fixes

- node resolver - 'moduleDirectory' => 'resolvePaths' ([a719a66](https://bitbucket.org/viewar_sf/eslint-config-viewar/commits/a719a66))
- **prettier:** json formatting ([3345283](https://bitbucket.org/viewar_sf/eslint-config-viewar/commits/3345283))
- import resolvers and vsCode settings ([4092ce6](https://bitbucket.org/viewar_sf/eslint-config-viewar/commits/4092ce6)), closes [#7](https://bitbucket.org/viewar_sf/eslint-config-viewar/issue/7)
- settings for vsCode ([5e61a60](https://bitbucket.org/viewar_sf/eslint-config-viewar/commits/5e61a60))
- **import-resolver:** fix import rules and settings ([#2](https://bitbucket.org/viewar_sf/eslint-config-viewar/issues/2)) ([df51d89](https://bitbucket.org/viewar_sf/eslint-config-viewar/commits/df51d89))

### Features

- **circleCI:** add testscript and circleCi config ([2f103db](https://bitbucket.org/viewar_sf/eslint-config-viewar/commits/2f103db))
- **env:** split into different environment-settings ([29247a4](https://bitbucket.org/viewar_sf/eslint-config-viewar/commits/29247a4))
- **standard:** add `eslint-config-standard` (and `eslint-plugin-standard`) ([#1](https://bitbucket.org/viewar_sf/eslint-config-viewar/issues/1)) ([45c4bf5](https://bitbucket.org/viewar_sf/eslint-config-viewar/commits/45c4bf5))
- **standard:** add rules from `eslint-config-standard` without plugins ([f20d042](https://bitbucket.org/viewar_sf/eslint-config-viewar/commits/f20d042))

# 1.0.0

🎉 **initial commit**
