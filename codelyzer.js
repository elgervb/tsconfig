"use strict"

module.exports = {
  "rulesDirectory": [
    "node_modules/codelyzer",
  ],
  "rules": {
    /**
     * CodeLyzer ruling
     */
    "directive-selector": [ true, ["attribute"], "smt", "camelCase" ],
    "component-selector": [ true, ["element"], "smt", "kebab-case" ],
    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": true,
    "no-attribute-parameter-decorator": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "no-forward-ref": true,
    "use-life-cycle-interface": true,
    "use-pipe-transform-interface": true,
    "pipe-naming": [ true, "camelCase", "smt" ],
    "component-class-suffix": true,
    "directive-class-suffix": true,
    "templates-use-public": true,
    "no-access-missing-member": true,
    "invoke-injectable": true,
  },
}
