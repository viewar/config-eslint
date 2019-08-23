# Formating and Linting

## setup
> [prettier](https://prettier.io) + [EsLint](https://eslint.org/) = [prettier-eslint](https://github.com/prettier/prettier-eslint-cli)

__why both?__  
* __prettier is a formatter__
** limited options
** formatting often kills eslint-features (alignment, advanced bracket styles, jsx formats, ...)
* __eslint is a linter__  
** checks for errors and pitfalls in code (undefined vars, broken imports, const assignments, ...) 
** helps to enforce "best-practise" (===, no-param-reassignments, ...)
** provides logical formatting

reason to NOT use eslint-plugin-prettier:  
code shall be formatted, but prettier formatations often collide with eslint formatting,  
and would be shown as errors.

## TODO
+ TEST on other workstations (especially on MAC)
+ add eslint-plugin-node + some customized rules (not just all recommended)
+ shove eslint/prettier RC files into /config
+ finetune rules (take some from /logger and rest from /eslint-config-stackr23)
  + add '[eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)'