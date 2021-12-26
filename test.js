// import Check from "@allnulled/check-that";
const Check = require("./check-that.js");

Check.that("").isString().and.hasLengthLowerThan(1);
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

const errorTests = [
    () => Check.that("").isString().and.hasLengthLowerThan(0),
    () => Check.that("5").isNumber(),
    () => Check.that("5").equals(5),
    () => Check.that(false).isUndefined(),
    () => Check.that(undefined).isNotUndefined(),
    () => Check.that(5).isString(),
    () => Check.that(5).isObject(),
    () => Check.that(5).isFunction(),
    () => Check.that(5).isArray(),
    () => Check.that(5).isGreaterThan(5),
    () => Check.that(5).isLowerThan(5),
    () => Check.that(5).isInstanceOf(Date),
    () => Check.that(5).isDate(),
    () => Check.that([]).hasLengthGreaterThan(0),
    () => Check.that([]).hasLengthLowerThan(0),
    () => Check.that(5).can(v => v !== 5), // The function must return true, otherwise an error will arise
    () => Check.that(5).cannot(v => v === 5), // The function must return false, otherwise an error will arise
    () => Check.that(5).throwsOn(v => {}),
    () => Check.that(5).doesNotThrowOn(v => {throw new Error()}),
];

ErrorTestsLoop:
for(let index = 0; index < errorTests.length; index++) {
  const errorTest = errorTests[index];
  try {
      errorTest();
  } catch (error) {
      continue ErrorTestsLoop;
  }
  throw new Error("Test number " + index + " failed.");
}

console.log("Tests passed successfully!");