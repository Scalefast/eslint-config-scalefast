# eslint-config-scalefast

[![npm version](https://badge.fury.io/js/eslint-config-scalefast.svg)](https://badge.fury.io/js/eslint-config-scalefast)

Eslint config we use and extend at Scalefast as a shareable configuration https://eslint.org/docs/developer-guide/shareable-configs

## Rules

We extend [eslint:recommended](https://eslint.org/docs/rules/) and build an opinionated set of rules on top of it, 
check index.js for the complete list.

All the rules in this package have 2 purposes.

* Enable all rules that prevent bugs and bad practices. Rules like [Disallow self compare](https://eslint.org/docs/rules/no-self-compare) can prevent hard to spot mistakes
* Enforcing a consistent visual style for new and old code without forcing large rewrites

The large number of rules we enable for these reasons may cause a number of issues in projects that didn't
follow them from the start, in these cases some rules can be changed from "error" to "warn" enabling us to do a more gradual refactor. Temporarily disabling style related rules will also make easier to spot the most serious issues first.

## Contributing

We are open to add, modify or remove rules if you provide a reasoning behind the changes. Create a PR with the proposed changes in [Github](https://github.com/scalefast/editor-tools-scalefast) and provide an example of the effects it will have on a small code sample. 

Take into account that some of the visual rules are not better or worse than any other convention but changing them would force many changes that don't add value.

If you are doing a new project at Scalefast and need a different set of rules for any reason tell us about it, we can see if it can be integrated with our current configuration or has to be kept separated. In any case this repository is a great place to have reusable configurations and avoid duplication.
