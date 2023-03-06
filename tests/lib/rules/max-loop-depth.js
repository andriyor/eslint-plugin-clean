/**
 * @fileoverview max loop depth
 * @author andriy
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/max-loop-depth"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("max-loop-depth", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "for (var i = 0; i < [1].length; i++) {for (var j = 0; j < [1].length; j++) {for (var z = 0; z < [1].length; z++) {}}}",
      options: [2],
      errors: [{ message: "Loop block are nested too deeply (3). Maximum allowed is 2.", type: "ForStatement" }],
    },
  ],
});
