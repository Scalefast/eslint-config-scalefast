# eslint-config-scalefast

[![npm version](https://badge.fury.io/js/eslint-config-scalefast.svg)](https://badge.fury.io/js/eslint-config-scalefast)

Eslint config we use and extend at Scalefast as a [shareable configuration](https://eslint.org/docs/developer-guide/shareable-configs)

## Rules

We extend [eslint:recommended](https://eslint.org/docs/rules/) and build an opinionated set of rules on top of it.

### Custom rules

#### [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)
It’s a common mistake in JavaScript to create an object with just a setter for a property but never have a corresponding getter defined for it. Without a getter, you cannot read the property, so it ends up not being used.

``` js
// ✗ avoid
var o = {
    set a(value) {
        this.val = value;
    }
};

// ✓ ok
var o = {
    set a(value) {
        this.val = value;
    },
    get a() {
        return this.val;
    }
};
```

#### [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)
This rule normalize style of spacing before/after an arrow function’s arrow

```js
()=> {};   // ✗ avoid
() =>{};   // ✗ avoid
()=> {};   // ✗ avoid

() => {};   // ✓ ok
```

#### [block-spacing](https://eslint.org/docs/rules/block-spacing)
This rule enforces consistent spacing inside an open block token and the next token on the same line. This rule also enforces consistent spacing inside a close block token and previous token on the same line.

```js
function foo() {return true;}    // ✗ avoid
if (foo) { bar = 0;}             // ✗ avoid
function baz() {let i = 0;       // ✗ avoid
    return i;
}

function foo() { return true; }    // ✓ ok
if (foo) { bar = 0; }              // ✓ ok
```

#### [brace-style](https://eslint.org/docs/rules/brace-style)
Brace style is closely related to indent style in programming and describes the placement of braces relative to their control statement and body. There are probably a dozen, if not more, brace styles in the world.

```js
// ✗ avoid
function foo()
{
  return true;
}

// ✓ ok
function foo() {
  return true;
}
```

#### [camelcase](https://eslint.org/docs/rules/camelcase)
When it comes to naming variables. Our configuration is to not check property names.

```js
var obj = {
    myPref: 1      // ✗ avoid
};

var obj = {
    my_pref: 1      // ✓ ok
};
```

#### [comma-spacing](https://eslint.org/docs/rules/comma-spacing)
Spacing around commas improves readability of a list of items. Although most of the style guidelines for languages prescribe adding a space after a comma and not before it, it is subjective to the preferences of a project.

```js
var obj = {"foo": "bar" ,"baz": "qur"};    // ✗ avoid
foo(a,b);                                  // ✗ avoid

var obj = {"foo": "bar", "baz": "qur"};    // ✓ ok
foo(a, b);                                  // ✓ ok
```

#### [comma-style](https://eslint.org/docs/rules/comma-style)
Requires a comma after and on the same line as an array element, object property, or variable declaration.

``` js
var obj = {
    foo: 'foo'
    ,bar: 'bar'   // ✗ avoid
  }

  var obj = {
    foo: 'foo',
    bar: 'bar'   // ✓ ok
  }
```

#### [curly](https://eslint.org/docs/rules/curly)
It's considered by many to be best practice to never omit curly braces around blocks, even when they are optional, because it can lead to bugs and reduces code clarity.

```js
if (foo) foo++;      // ✗ avoid

if (foo) {
    foo++;           // ✓ ok
}
```

#### [dot-location](https://eslint.org/docs/rules/dot-location)
The dot in a member expression should be on the same line as the property portion.

``` js
console.
    log('hello')      // ✗ avoid

console
    .log('hello')     // ✓ ok
```

#### [eol-last](https://eslint.org/docs/rules/eol-last)
Enforces that files end with a newline (LF)

```js
// ✗ avoid
function doSmth() {
  var foo = 2;
}

// ✓ ok
function doSmth() {
  var foo = 2;
}\n
```

#### [eqeqeq](https://eslint.org/docs/rules/eqeqeq)
Always use === instead of ==. Exception: obj == null is allowed to check for null || undefined.

```js
// ✗ avoid
a == b
typeof foo == 'undefined'

// ✓ ok
a === b
typeof foo === 'undefined'
foo == null
```

#### [func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)
No space between function identifiers and their invocations.

``` js
console.log ('hello') // ✗ avoid
console.log('hello')  // ✓ ok
```

#### [generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)
Generators are a new type of function in ECMAScript 6 that can return multiple values over time. These special functions are indicated by placing an * after the function keyword.

```js
// ✗ avoid
function *generator() {}
var anonymous = function *() {};
var shorthand = { *generator() {} };

// ✗ avoid
function* generator() {}
var anonymous = function* () {};
var shorthand = { * generator() {} };

// ✓ ok
function * generator() {}
var anonymous = function * () {};
var shorthand = { * generator() {} };
```

#### [handle-callback-err](https://eslint.org/docs/rules/handle-callback-err)
Always handle the err function parameter.

``` js
// ✗ avoid
function loadData (err, data) {
    doSomething();
}

// ✓ ok
function loadData (err, data) {
    if (err) {
        console.log(err.stack);
    }
    doSomething();
}
```

#### [indent](https://eslint.org/docs/rules/indent)
Use 4 spaces for identation  by default.

``` js
// SwitchCase
switch(a){
  case "a":
    break;
  case "b":
    break;
} // ✓ ok

// VariableDeclarator
var a,
    b,
    c; // ✓ ok

let a,
    b,
    c; // ✓ ok

const a = 1,
      b = 2,
      c = 3; // ✓ ok

// outerIIFEBody : 1
(function() {

    function foo(x) { // ✓ ok
        return x + 1;
    }

})();

// MemberExpression
foo
    .bar
    .baz(); // ✓ ok

// MemberExpression
foo
.bar
.baz(); // ✗ avoid
```

#### [key-spacing](https://eslint.org/docs/rules/key-spacing)
Add space between colon and value in key value pairs.

```js
// ✗ avoid
var obj = { "foo" : 42 };
var obj = { "foo" :42 };
var obj = { "foo":42 };

// ✓ ok
var obj = { "foo": 42 };
```

#### [keywords-spacing](https://eslint.org/docs/rules/keywords-spacing)
Add a space after keywords.

``` js
if (condition) { ... }   // ✓ ok
if(condition) { ... }    // ✗ avoid
```

#### [new-cap](https://eslint.org/docs/rules/new-cap)
Constructor names must begin with a capital letter.

``` js
function animal () {}
var dog = new animal()    // ✗ avoid

function Animal () {}
var dog = new Animal()    // ✓ ok
```

#### [new-parens](https://eslint.org/docs/rules/new-parens)
Constructor with no arguments must be invoked with parentheses.

``` js
function Animal () {}
var dog = new Animal    // ✗ avoid
var dog = new Animal()  // ✓ ok
```

#### [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)
Use array literals instead of array constructors.

``` js
var nums = new Array(1, 2, 3)   // ✗ avoid
var nums = [1, 2, 3]            // ✓ ok
```

#### [no-caller](https://eslint.org/docs/rules/no-caller)
The use of arguments.caller and arguments.callee make several code optimizations impossible. They have been deprecated in future versions of JavaScript.

```js
function foo() {
    var callee = arguments.callee;    // ✗ avoid
}
```

#### [no-eval](https://eslint.org/docs/rules/no-eval)
This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by disallowing the use of the eval() function. As such, it will warn whenever the eval() function is used.

```js
// ✗ avoid
var foo = eval;
foo("var a = 0");
this.eval("var a = 0");
window.eval("var a = 0");

// ✓ ok
class A {
    foo() {
        // This is a user-defined method.
        this.eval("var a = 0");
    }

    eval() {
    }
}
```

#### [no-extend-native](https://eslint.org/docs/rules/no-extend-native)
Disallows directly modifying the prototype of builtin objects.

```js
// ✗ avoid
Object.prototype.a = "a";
Object.defineProperty(Array.prototype, "times", { value: 999 });
```

#### [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)
The bind() method is used to create functions with specific this values and, optionally, binds arguments to specific values. When used to specify the value of this, it’s important that the function actually uses this in its function body.

```js
// ✗ avoid
var x = function () {
    foo();
}.bind(bar);

var x = function () {
    function foo() {
      this.bar();
    }
}.bind(baz);

// ✓ ok
var x = function () {
    this.foo();
}.bind(bar);

var x = function (a) {
    return a + 1;
}.bind(foo, bar);
```

#### [no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)
Disallows unnecessary parentheses only around function expressions.

```js
// ✗ avoid
((function foo() {}))();
var y = (function () {return 1;});
```

#### [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)
Float values in JavaScript contain a decimal point, and there is no requirement that the decimal point be preceded or followed by a number.

```js
// ✗ avoid
var num = .5;
var num = 2.;
var num = -.7;

// ✓ ok
var num = 0.5;
var num = 2.0;
var num = -0.7;
```

#### [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)
This rule aims to eliminate implied eval() through the use of setTimeout(), setInterval() or execScript(). As such, it will warn when either function is used with a string as the first argument.

```js
// ✗ avoid
setTimeout("alert('Hi!');", 100);
window.setTimeout("count = 5", 10);

// ✓ ok
setTimeout(function() {
    alert("Hi!");
}, 100);
```

#### [no-iterator](https://eslint.org/docs/rules/no-iterator)
This rule is aimed at preventing errors that may arise from using the __iterator__ property, which is not implemented in several browsers. As such, it will warn whenever it encounters the __iterator__ property.

```js
// ✗ avoid
foo.__iterator__ = function () {};

// ✓ ok
var __iterator__ = foo;
```

#### [no-label-var](https://eslint.org/docs/rules/no-label-var)
This rule aims to create clearer code by disallowing the bad practice of creating a label that shares a name with a variable that is in scope.

```js
// ✗ avoid
var x = foo;
function bar() {
x:
  for (;;) {
    break x;
  }
}

// ✓ ok
function foo() {
  var q = t;
}

function bar() {
q:
  for(;;) {
    break q;
  }
}
```

#### [no-labels](https://eslint.org/docs/rules/no-labels)
This rule aims to eliminate the use of labeled statements in JavaScript. It will warn whenever a labeled statement is encountered and whenever break or continue are used with a label.

```js
// ✗ avoid
label:
    while(true) {
        break label;
    }

// ✓ ok
while (true) {
    break;
}
```

#### [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)
This rule aims to eliminate unnecessary and potentially confusing blocks at the top level of a script or within other blocks.

```js
// ✗ avoid
if (foo) {
    bar();
    {
        baz();
    }
}

// ✓ ok
if (foo) {
    if (bar) {
        baz();
    }
}
```

#### [no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)

#### [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)
Multiple spaces in a row that are not used for indentation are typically mistakes.

```js
// ✗ avoid
var a =  1;
if(foo   === "bar") {}

// ✓ ok
var a = 1;
if(foo === "bar") {}
```

#### [no-multi-str](https://eslint.org/docs/rules/no-multi-str)
It’s possible to create multiline strings in JavaScript by using a slash before a newline.

```js
// ✗ avoid
var x = "Line 1 \
         Line 2";

// ✓ ok
var x = "Line 1\n" +
        "Line 2";
```

#### [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)
Enforces a maximum number of consecutive empty lines in some part of the file or at the end of the file.

```js
// ✗ avoid
var foo = 5;


var bar = 3;

// ✓ ok
var foo = 5;
var bar = 3;
```

#### [no-negated-in-lhs](https://eslint.org/docs/rules/no-negated-in-lhs)
This rule disallows negating the left operand in in expressions.

```js
// ✗ avoid
if(!key in object) {

}

// ✓ ok
if(!(key in object)) {
    // key is not in object
}
```

#### [no-new](https://eslint.org/docs/rules/no-new)
This rule is aimed at maintaining consistency and convention by disallowing constructor calls using the new keyword that do not assign the resulting object to a variable.

```js
// ✗ avoid
new Thing();

// ✓ ok
var thing = new Thing();
Thing();
```

#### [no-new-func](https://eslint.org/docs/rules/no-new-func)
It’s possible to create functions in JavaScript using the Function constructor.

```js
// ✗ avoid
var x = new Function("a", "b", "return a + b");

// ✓ ok
var x = function (a, b) {
    return a + b;
};
```

#### [no-new-object](https://eslint.org/docs/rules/no-new-object)
The Object constructor is used to create new generic objects in JavaScript.

```js
// ✗ avoid
var myObject = new Object();

// ✓ ok
var myObject = new CustomObject();
var myObject = {};
```

#### [no-new-require](https://eslint.org/docs/rules/no-new-require)
This rule aims to eliminate use of the new require expression.

```js
// ✗ avoid
var appHeader = new require('app-header');
// ✓ ok
var appHeader = require('app-header');
```

#### [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)
This rule aims to eliminate the use of String, Number, and Boolean with the new operator. As such, it warns whenever it sees new String, new Number, or new Boolean.

```js
// ✗ avoid
var stringObject = new String("Hello world");
// ✓ ok
var stringObject = String("Hello world");
```

#### [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)
This rule disallows octal escape sequences in string literals.

```js
// ✗ avoid
var foo = "Copyright \251";

// ✓ ok
var foo = "Copyright \u00A9";   // unicode
var foo = "Copyright \xA9";     // hexadecimal
```

#### [no-proto](https://eslint.org/docs/rules/no-proto)
When an object is created with the new operator, __proto__ is set to the original “prototype” property of the object’s constructor function. Object.getPrototypeOf is the preferred method of getting the object’s prototype. To change an object’s prototype, use Object.setPrototypeOf.

```js
// ✗ avoid
var a = obj.__proto__;
obj.__proto__ = b;

// ✓ ok
var a = Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, b);
```

#### [no-return-assign](https://eslint.org/docs/rules/no-return-assign)
Disallow assignments unless they are enclosed in parentheses.

```js
// ✗ avoid
function doSomething() {
    return foo = bar + 2;
}

// ✓ ok
function doSomething() {
    return foo == bar + 2;
}
function doSomething() {
    return foo === bar + 2;
}
```

#### [no-return-await](https://eslint.org/docs/rules/no-return-await)
This rule aims to prevent a likely common performance hazard due to a lack of understanding of the semantics of async function.

```js
// ✗ avoid
async function foo() {
    return await bar();
}
// ✓ ok
async function foo() {
    await bar();
    return;
}
```

#### [no-self-compare](https://eslint.org/docs/rules/no-self-compare)
This error is raised to highlight a potentially confusing and potentially pointless piece of code. There are almost no situations in which you would need to compare something to itself.

```js
// ✗ avoid
var x = 10;
if (x === x) {
    x = 20;
}
```


All the rules in this package have 2 purposes.

* Enable all rules that prevent bugs and bad practices. Rules like [Disallow self compare](https://eslint.org/docs/rules/no-self-compare) can prevent hard to spot mistakes
* Enforcing a consistent visual style for new and old code without forcing large rewrites

The large number of rules we enable for these reasons may cause a number of issues in projects that didn't
follow them from the start, in these cases some rules can be changed from "error" to "warn" enabling us to do a more gradual refactor. Temporarily disabling style related rules will also make easier to spot the most serious issues first.

## Contributing

We are open to add, modify or remove rules if you provide a reasoning behind the changes. Create a PR with the proposed changes in [Github](https://github.com/scalefast/editor-tools-scalefast) and provide an example of the effects it will have on a small code sample.

Take into account that some of the visual rules are not better or worse than any other convention but changing them would force many changes that don't add value.

If you are doing a new project at Scalefast and need a different set of rules for any reason tell us about it, we can see if it can be integrated with our current configuration or has to be kept separated. In any case this repository is a great place to have reusable configurations and avoid duplication.
