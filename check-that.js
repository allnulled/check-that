(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
        typeof define === "function" && define.amd ? define(factory) :
            (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Check = factory());
})(this, (function () {

    class Check {

        static that(...args) {
            return new this(...args);
        }

        constructor(target, targetID = "?", errorID = "xxxxx") {
            this.target = target;
            this.targetID = targetID;
            this.errorID = errorID;
            this.and = this;
        }

        equals(value, valueID = undefined) {
            if (this.target === value) {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to equal <" + (valueID || value) + "> [ERROR:" + this.errorID + "]");
        }

        differs(value, valueID = undefined) {
            if (this.target !== value) {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to differ <" + (valueID || value) + "> [ERROR:" + this.errorID + "]");
        }
        
        isUndefined() {
            if (typeof this.target === "undefined") {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to be undefined [ERROR:" + this.errorID + "]");
        }

        isNotUndefined() {
            if (typeof this.target !== "undefined") {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to not be undefined [ERROR:" + this.errorID + "]");
        }

        isBoolean() {
            if (typeof this.target === "boolean") {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to be a boolean [ERROR:" + this.errorID + "]");
        }

        isTrue() {
            if (this.target === true) {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to be true [ERROR:" + this.errorID + "]");
        }

        isFalse() {
            if (this.target === false) {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to be false [ERROR:" + this.errorID + "]");
        }

        isNumber() {
            if (typeof this.target === "number") {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to be a number [ERROR:" + this.errorID + "]");
        }

        isString() {
            if (typeof this.target === "string") {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to be a string [ERROR:" + this.errorID + "]");
        }

        isObject() {
            if (typeof this.target === "object") {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to be an object [ERROR:" + this.errorID + "]");
        }

        isFunction() {
            if (typeof this.target === "function") {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to be a function [ERROR:" + this.errorID + "]");
        }

        isArray() {
            if (Array.isArray(this.target)) {
                return this;
            }
            throw new Error("Expected <" + this.targetID + "> to be an array [ERROR:" + this.errorID + "]");
        }

        isGreaterThan(value, valueID = undefined) {
            try {
                if (this.target > value) {
                    return this;
                }
            } catch (error) {
                throw new Error("Expected <" + this.targetID + "> to be -comparable as- greater than <" + (valueID || value) + "> [ERROR:" + this.errorID + "]");
            }
            throw new Error("Expected <" + this.targetID + "> to be greater than <" + (valueID || value) + "> [ERROR:" + this.errorID + "]");
        }

        isLowerThan(value, valueID = undefined) {
            try {
                if (this.target < value) {
                    return this;
                }
            } catch (error) {
                throw new Error("Expected <" + this.targetID + "> to be -comparable as- lower than <" + (valueID || value) + "> [ERROR:" + this.errorID + "]");
            }
            throw new Error("Expected <" + this.targetID + "> to be lower than <" + (valueID || value) + "> [ERROR:" + this.errorID + "]");
        }

        isInstanceOf(someClass, someClassID = false) {
            try {
                if (this.target instanceof someClass) {
                    return this;
                }
            } catch (error) {
                throw new Error("Expected <" + this.targetID + "> to be -comparable as- instance of <" + (someClassID || someClass) + "> [ERROR:" + this.errorID + "]");
            }
            throw new Error("Expected <" + this.targetID + "> to be an instance of <" + (someClassID || someClass) + "> [ERROR:" + this.errorID + "]");
        }

        isDate() {
            try {
                if (this.target instanceof Date) {
                    return this;
                }
            } catch (error) {
                throw new Error("Expected <" + this.targetID + "> to be -comparable as- a date [ERROR:" + this.errorID + "]");
            }
            throw new Error("Expected <" + this.targetID + "> to be a date [ERROR:" + this.errorID + "]");
        }

        hasLengthGreaterThan(value, valueID = undefined) {
            try {
                if (this.target.length > value) {
                    return this;
                }
            } catch (error) {
                throw new Error("Expected <" + this.targetID + "> to have a length -comparable as- greater than <" + (valueID || value) + "> [ERROR:" + this.errorID + "]");
            }
            throw new Error("Expected <" + this.targetID + "> to have a length greater than <" + (valueID || value) + "> [ERROR:" + this.errorID + "]");
        }

        hasLengthLowerThan(value, valueID = undefined) {
            try {
                if (this.target.length < value) {
                    return this;
                }
            } catch (error) {
                throw new Error("Expected <" + this.targetID + "> to have a length -comparable as- lower than <" + (valueID || value) + "> [ERROR:" + this.errorID + "]");
            }
            throw new Error("Expected <" + this.targetID + "> to have a length lower than <" + (valueID || value) + "> [ERROR:" + this.errorID + "]");
        }

        can(filter, filterID = "?") {
            try {
                if (typeof filter === "function") {
                    const result = filter(this.target, this);
                    if (result === true) {
                        return this;
                    }
                }
            } catch (error) {
                throw new Error("Expected <" + this.targetID + "> to -be called and to- be able to <" + filterID + "> [ERROR:" + this.errorID + "]");
            }
            throw new Error("Expected <" + this.targetID + "> to be able to <" + filterID + "> [ERROR:" + this.errorID + "]");
        }

        cannot(filter, filterID = "?") {
            try {
                if (typeof filter === "function") {
                    const result = filter(this.target, this);
                    if (result === false) {
                        return this;
                    }
                }
            } catch (error) {
                throw new Error("Expected <" + this.targetID + "> to -be called and to- not be able to <" + filterID + "> [ERROR:" + this.errorID + "]");
            }
            throw new Error("Expected <" + this.targetID + "> to not be able to <" + filterID + "> [ERROR:" + this.errorID + "]");
        }

        throwsOn(filter, filterID = "?") {
            if (typeof filter === "function") {
                try {
                    filter(this.target, this);
                } catch (error) {
                    return this;
                }
                throw new Error("Expected <" + this.targetID + "> to throw errors on <" + filterID + "> [ERROR:" + this.errorID + "]");
            }
            throw new Error("Expected <" + this.targetID + "> to -be called and to- throw errors on <" + filterID + "> [ERROR:" + this.errorID + "]");
        }

        doesNotThrowOn(filter, filterID = "?") {
            try {
                if (typeof filter === "function") {
                    filter(this.target, this);
                    return this;
                }
            } catch (error) {
                throw new Error("Expected <" + this.targetID + "> to not throw errors on <" + filterID + "> [ERROR:" + this.errorID + "]");
            }
            throw new Error("Expected <" + this.targetID + "> to -be called and to- not throw errors on <" + filterID + "> [ERROR:" + this.errorID + "]");
        }

    }

    Check.default = Check;

    return Check;

}));