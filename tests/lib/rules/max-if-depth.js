/**
 * @fileoverview max loop depth
 * @author andriy
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/max-if-depth"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("max-if-depth", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "if (true) { if (true) { if(true){} } }",
      options: [2],
      errors: [{ message: "If block are nested too deeply (3). Maximum allowed is 2.", type: "IfStatement" }],
    },
  ],
});
