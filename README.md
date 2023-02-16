# @allnulled/check-that

Simple JavaScript library to make checkings in a semantic-friendly syntax.

## Examples

```js
import Check from "@allnulled/check-that";

Check.that("").isString().and.hasLengthLowerThan(1);
Check.that(true).isBoolean();
Check.that(5).isNumber();
Check.that(5).equals(5);
Check.that(undefined).isUndefined();
Check.that(5).isNotUndefined();
Check.that("").isString();
Check.that({}).isObject();
Check.that(Check).isFunction();
Check.that([]).isArray();
Check.that(5).isGreaterThan(4);
Check.that(5).isLowerThan(6);
Check.that(new Date()).isInstanceOf(Date);
Check.that(new Date()).isDate();
Check.that([5]).hasLengthGreaterThan(0);
Check.that([5]).hasLengthLowerThan(2);
Check.that(5).can(v => v === 5); // The function must return true, otherwise an error will arise
Check.that(5).cannot(v => v !== 5); // The function must return false, otherwise an error will arise
Check.that(5).throwsOn(v => {throw new Error()});
Check.that(5).doesNotThrowOn(v => undefined);
```

## How it works

- `Check` is the main class.
- `Check.that(value)` is the same as `new Check(value)`, is a static constructor.
- The main class' constructor has the following signature:
  - `Check.that(target:any, targetID:String = "?", errorID:String = "xxxxx")`
- The main class has these methods with these signatures:
  - `isBoolean()`
  - `isString()`
  - `isNumber()`
  - `equals(value:any, valueID:String = undefined)`
  - `isUndefined()`
  - `isNotUndefined()`
  - `isString()`
  - `isObject()`
  - `isFunction()`
  - `isArray()`
  - `isDate()`
  - `isIntanceOf(clazz:Function, clazzID:String = undefined)`
  - `isGreaterThan(value:any, valueID:String = undefined)`
  - `isLowerThan(value:any, valueID:String = undefined)`
  - `hasLengthGreaterThan(value:any, valueID:String = undefined)`
  - `hasLengthLowerThan(value:any, valueID:String = undefined)`
  - `can(filter:Function, filterID:String = undefined)`
  - `cannot(filter:Function, filterID:String = undefined)`
  - `throwsOn(filter:Function, filterID:String = undefined)`
  - `doesNotThrowOn(filter:Function, filterID:String = undefined)`
- When one of these methods fails, an error is thrown.
- When one of these methods succeeds, the `Check` instance itself is returned, in order to chain other checks against the same `target`.
- The thrown errors have the format:
  - `"Expected <{ targetID }> to { type of check expression provided by the method } { valueID when used } [ERROR:{ errorID }]"`
- Sometimes, intermediate operations fail. You can find some expression like `-comparable as-` on the error message when this happens.
- Finally, you can chain checks using `.and`, or not using it too.

## License

Do what you want with it, no license.