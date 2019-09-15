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
var obj = { "foo": 42 };
var obj = { "foo" :42 };
var obj = { "foo":42 };

// ✓ ok
var obj = { "foo" : 42 };
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

// ✓ ok
(0).toString();
(Object.prototype.toString.call());
({}.toString.call());
(function(){} ? a() : b());
(/^a$/).test(x);
a = (b * c);
(a * b) + c;
typeof (a);
```

#### [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)


All the rules in this package have 2 purposes.

* Enable all rules that prevent bugs and bad practices. Rules like [Disallow self compare](https://eslint.org/docs/rules/no-self-compare) can prevent hard to spot mistakes
* Enforcing a consistent visual style for new and old code without forcing large rewrites

The large number of rules we enable for these reasons may cause a number of issues in projects that didn't
follow them from the start, in these cases some rules can be changed from "error" to "warn" enabling us to do a more gradual refactor. Temporarily disabling style related rules will also make easier to spot the most serious issues first.

## Contributing

We are open to add, modify or remove rules if you provide a reasoning behind the changes. Create a PR with the proposed changes in [Github](https://github.com/scalefast/editor-tools-scalefast) and provide an example of the effects it will have on a small code sample.

Take into account that some of the visual rules are not better or worse than any other convention but changing them would force many changes that don't add value.

If you are doing a new project at Scalefast and need a different set of rules for any reason tell us about it, we can see if it can be integrated with our current configuration or has to be kept separated. In any case this repository is a great place to have reusable configurations and avoid duplication.
