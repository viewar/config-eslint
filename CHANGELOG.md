# Changelog

> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)

# [1.12.0](https://github.com/viewar/config-eslint/compare/v1.11.0...v1.12.0) (2020-05-06)


### Bug Fixes

* add ignorePatterns to react-env ([fa4509f](https://github.com/viewar/config-eslint/commit/fa4509fb0825a7c1269de2a1aca5f971a8f08913))


### Features

* **typescript-support:** override react env for '.ts?' files ([#57](https://github.com/viewar/config-eslint/issues/57)) ([dddd912](https://github.com/viewar/config-eslint/commit/dddd912e86a06f5715339ec63687adbe24cae03b))

# [1.11.0](https://github.com/viewar/config-eslint/compare/v1.10.0...v1.11.0) (2020-05-05)


### Bug Fixes

* **release-process:** release on master branch ([27d8e30](https://github.com/viewar/config-eslint/commit/27d8e3001e2a5799e6532fd3d84ae773eada9a10))


### Features

* **module-resolvement:** use 'tsconfig.json' for webpack-resolver-config ([#53](https://github.com/viewar/config-eslint/issues/53)) ([e4b2fb3](https://github.com/viewar/config-eslint/commit/e4b2fb34eb90182448f7ec23d95cd9664942a2eb))

# [1.10.0](https://github.com/viewar/config-eslint/compare/v1.9.0...v1.10.0) (2019-11-27)

### Bug Fixes

- **deps:** add 'eslint-formatter-pretty' to save-deps ([be63bb7](https://github.com/viewar/config-eslint/commit/be63bb7fadb5f7d433a2e89ff7dd3b3d577f85d2))
- **deps:** fix save-deps (eslint, and some plugins) ([3b4cba0](https://github.com/viewar/config-eslint/commit/3b4cba0fa12d5f77392400635468b224ee110862))

### Features

- **react-hooks:** add 'eslint-plugin-react-hooks' ([5f8e6e8](https://github.com/viewar/config-eslint/commit/5f8e6e84d933875b900934c7f4c4311bee70d426))
- **CI:** test on linux, mac and windows ([2bfc2fd](https://github.com/viewar/config-eslint/commit/2bfc2fd4fc31d18b661f05bff7df4166be9ad484))

# [1.9.0](https://github.com/viewar/config-eslint/compare/v1.8.0...v1.9.0) (2019-11-24)

### Bug Fixes

- **indent:** fix 'indent' rule for 'SwitchCase' and var/let ([ce84466](https://github.com/viewar/config-eslint/commit/ce8446629a261488f163c12901a2dbd717d9f8b3))
- **exports:** remove '/prettier' - in favor of '/prettier.config'closes [#20](https://github.com/viewar/config-eslint/issues/20) ([c154d42](https://github.com/viewar/config-eslint/commit/c154d423126597be35931e2eed0148d792dc1646))
- **rules:** remove deprecated rule 'react/jsx-space-before-closing' ([861d0bb](https://github.com/viewar/config-eslint/commit/861d0bb634ebf87da87f855c95f689cebc160045)), closes [#24](https://github.com/viewar/config-eslint/issues/24)
- rename to 'eslint-config-viewar' (eslint name convention) ([0edf8f7](https://github.com/viewar/config-eslint/commit/0edf8f77f5f5eeabdb23d15c202cc61ca04f245e))
- **CI:** use travis, as repo is now 'public' ([1630a1d](https://github.com/viewar/config-eslint/commit/1630a1d5df9962d52c49733923f29d89446d74ae))

# [1.8.0](https://github.com/viewar/config-eslint/compare/v1.7.0...v1.8.0) (2019-11-18)

### Bug Fixes

- **exports:** remove '/prettier' - in favor of '/prettier.config' ([9e69bb2](https://github.com/viewar/config-eslint/commit/9e69bb29d5ba142e72d46ad38bec318be27535c7))

### Features

- **release:** add 'semantic-release-slack-bot' ([af9919c](https://github.com/viewar/config-eslint/commit/af9919ca5dc346ec954d2cf04a4c0015dcc2028f))
- **eslint-plugin-promise:** add rules for promise usage ([cf197e3](https://github.com/viewar/config-eslint/commit/cf197e34d3bd97ca12582de283535fbd8651fbe0))
- **env:** make 'react' the default env ([a4a058b](https://github.com/viewar/config-eslint/commit/a4a058b176a3f365c5bd60393775cf6e3d708c40))
- **CI:** use build stage for release ([2a49c29](https://github.com/viewar/config-eslint/commit/2a49c29fc42183d675b44b6ff44c54598bf6466d))

# [1.7.0](https://github.com/viewar/config-eslint/compare/v1.6.0...v1.7.0) (2019-10-31)

### Bug Fixes

- **deps:** add 'eslint-plugin-node' to save-deps ([2200cf3](https://github.com/viewar/config-eslint/commit/2200cf3bf3d0665e2e46136b737b0605b26d127b))
- **package:** prepare pckg to get published ([2831830](https://github.com/viewar/config-eslint/commit/28318306008864b1c9e7ab04ca44277fdeabcb80))
- **CI:** run lint+test+release ([5a69ea6](https://github.com/viewar/config-eslint/commit/5a69ea682e686a03d4415c55e4f24efd14214bb0))

### Features

- **npm:** publish to npm per 'semantic-release' ([443ad8a](https://github.com/viewar/config-eslint/commit/443ad8a1a52b1a0667865729015a281461d9aa0d))

# [1.6.0](https://github.com/viewar/config-eslint/compare/v1.5.1...v1.6.0) (2019-10-31)

### Bug Fixes

- add **tests** to eslintignore ([624e044](https://github.com/viewar/config-eslint/commit/624e044500ba8f92820a445572a3c16714310c97))
- **settings:** add `settings.engines` ([68836d2](https://github.com/viewar/config-eslint/commit/68836d2c2b879666221ff640d4d7b2cb4fa98fe4))
- **install:** move eslint to dev- / peer-deps ([7446599](https://github.com/viewar/config-eslint/commit/7446599d819f4134e6d48c783bb14a57c6114d21))
- **package:** prepare pckg to get published ([3c2679a](https://github.com/viewar/config-eslint/commit/3c2679acb7230fd0308f1dc351c186302a42fdb3))
- rename to 'eslint-config-viewar' (eslint name convention) ([#11](https://github.com/viewar/config-eslint/issues/11)) ([249ca6d](https://github.com/viewar/config-eslint/commit/249ca6d19cb3fea671fc3b8aa3333ed26c32e9b2))
- **CI:** run lint+test+release ([ebbc314](https://github.com/viewar/config-eslint/commit/ebbc314d561430ab6e7d15498722ebe33d319cc2))

### Features

- **rules:** allow static state vars for react classes ([282b5bd](https://github.com/viewar/config-eslint/commit/282b5bdd054f57e307d6c5c9a0adfa3e02e1417f))
- **rules:** disable 'no-use-before-define' for functions ([8da1263](https://github.com/viewar/config-eslint/commit/8da12631d444f04fc5f887097b81515de3cf3c93))
- **npm:** publish to npm per 'semantic-release' ([7f48109](https://github.com/viewar/config-eslint/commit/7f48109c374f193e2dc445c6537561c71f31fedb))

## [1.5.1](https://github.com/viewar/config-eslint/compare/v1.5.0...v1.5.1) (2019-10-24)

### Bug Fixes

- disable 'node/no-missing-import' as a workaround for [#8](https://github.com/viewar/config-eslint/issues/8) ([d7efcc6](https://github.com/viewar/config-eslint/commit/d7efcc6fa588b0b3d3f88dfc0f4dc358360bfd3c))

# [1.5.0](https://github.com/viewar/config-eslint/compare/v1.4.0...v1.5.0) (2019-10-15)

### Bug Fixes

- **jsx-filename-extension:** add '.js' to allowed file extensions ([4ac02c4](https://github.com/viewar/config-eslint/commit/4ac02c4631595299a3c530d26cc459a9064e655e))
- **lint:** config and src path ([256f48c](https://github.com/viewar/config-eslint/commit/256f48ccc3a20126a0c64ee084640fcb449f39a7))

* **CI:** allow dependabot PRs to run pipeline ([6fe8e83](https://github.com/viewar/config-eslint/commit/6fe8e83199c258a6bc956acd712d0e0690d3fa31))
* **deps:** fix babelregister bug ([0db6f48](https://github.com/viewar/config-eslint/commit/0db6f480ed55678f13403b2317558683f76c1ca8))
* **CI:** readd test job (+ trigger CI) ([45c2c4b](https://github.com/viewar/config-eslint/commit/45c2c4b2d76d8223e3f83e25aa8690e1df2900d8))
* **getResolveConfigPath:** return false on catched MODULE_NOT_FOUND ([e8814a2](https://github.com/viewar/config-eslint/commit/e8814a2a6d9a316f865e7c0758d2751e78329973))
* **release:** version number after reset ([fdedf32](https://github.com/viewar/config-eslint/commit/fdedf324ba6dbcb6df6b1b8417e8b6fcdf9687de))

### Features

- **/prettier:** export `prettier.config.js` + added test ([a383a6d](https://github.com/viewar/config-eslint/commit/a383a6daabf218b6a0502992e8eb82c9d90995e4))

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
