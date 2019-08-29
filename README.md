# Formating and Linting

## setup

> [prettier](https://prettier.io) + [EsLint](https://eslint.org/) = [prettier-eslint](https://github.com/prettier/prettier-eslint-cli)

**why both?**

- **prettier is a formatter**
  ** limited options
  ** formatting makes code sometimes unreadable  
  eslint-features (alignment, advanced bracket styles, jsx formats, ...)
- **eslint is a linter**  
  ** checks for errors and pitfalls in code (undefined vars, broken imports, const assignments, ...)
  ** helps to enforce "best-practise" (===, no-param-reassignments, ...)
  \*\* provides logical formatting

reason to NOT use eslint-plugin-prettier:  
prettier formatations often collide with eslint formatting
there is an eslint-config-prettier, that disables/overrules the eslint rules, which are colliding with eslint  
but thats NOT what we want.
(align, key-spacing, consecutive assignments, multiple-linebreaks (f.e. between import-groups))

## TODO

- TEST on other workstations (especially on MAC)
- add eslint-plugin-node + some customized rules (not just all recommended)
- shove eslint/prettier RC files into /config
- finetune rules (take some from /logger and rest from /eslint-config-stackr23)
  - add '[eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)'
