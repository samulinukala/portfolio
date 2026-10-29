import module from "node:module";
import path from "node:path";
import { P, match } from "ts-pattern";
import { z } from "zod/v4";
//#region ../../.pkgs/eff/dist/index.js
const pipeArguments = (self, args) => {
	switch (args.length) {
		case 0: return self;
		case 1: return args[0](self);
		case 2: return args[1](args[0](self));
		case 3: return args[2](args[1](args[0](self)));
		case 4: return args[3](args[2](args[1](args[0](self))));
		case 5: return args[4](args[3](args[2](args[1](args[0](self)))));
		case 6: return args[5](args[4](args[3](args[2](args[1](args[0](self))))));
		case 7: return args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))));
		case 8: return args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self))))))));
		case 9: return args[8](args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))))));
		default: {
			let ret = self;
			for (let i = 0, len = args.length; i < len; i++) ret = args[i](ret);
			return ret;
		}
	}
};
const Prototype = { pipe() {
	return pipeArguments(this, arguments);
} };
(function() {
	function PipeableBase() {}
	PipeableBase.prototype = Prototype;
	return PipeableBase;
})();
const dual = function(arity, body) {
	if (typeof arity === "function") return function() {
		return arity(arguments) ? body.apply(this, arguments) : ((self) => body(self, ...arguments));
	};
	switch (arity) {
		case 0:
		case 1: throw new RangeError(`Invalid arity ${arity}`);
		case 2: return function(a, b) {
			if (arguments.length >= 2) return body(a, b);
			return function(self) {
				return body(self, a);
			};
		};
		case 3: return function(a, b, c) {
			if (arguments.length >= 3) return body(a, b, c);
			return function(self) {
				return body(self, a, b);
			};
		};
		default: return function() {
			if (arguments.length >= arity) return body.apply(this, arguments);
			const args = arguments;
			return function(self) {
				return body(self, ...args);
			};
		};
	}
};
const identity = (a) => a;
const cast = identity;
const constant = (value) => () => value;
const constFalse = constant(false);
dual(2, (ab, bc) => (a) => bc(ab(a)));
const absurd = (_) => {
	throw new Error("Called `absurd` function which should be uncallable");
};
cast(absurd);
function memoize(f) {
	const objects = /* @__PURE__ */ new WeakMap();
	const primitives = /* @__PURE__ */ new Map();
	return (a) => {
		if (isObjectKeyword(a)) return getOrInsertComputed(objects, a, () => f(a));
		return getOrInsertComputed(primitives, a, () => f(a));
	};
}
dual(2, (a, b) => (data) => a(data) && b(data));
dual(2, (a, b) => (data) => a(data) || b(data));
dual(2, (a, b) => (data) => a(data) !== b(data));
dual(2, (a, b) => (data) => a(data) === b(data));
dual(2, (antecedent, consequent) => (data) => !antecedent(data) || consequent(data));
dual(2, (a, b) => (data) => !a(data) && !b(data));
dual(2, (a, b) => (data) => !a(data) || !b(data));
function isFunction(input) {
	return typeof input === "function";
}
function isObjectKeyword(input) {
	return typeof input === "object" && input !== null || isFunction(input);
}
dual(2, (data, property) => isObjectKeyword(data) && property in data);
function getOrInsertComputed(map, key, callback) {
	if (map.has(key)) return map.get(key);
	const value = callback(key);
	map.set(key, value);
	return value;
}
dual(2, (self, predicate) => {
	const input = Array.isArray(self) ? self : Array.from(self);
	const len = input.length;
	let idx = 0;
	while (idx < len && predicate(input[idx], idx)) idx++;
	return input.slice(idx);
});
dual(2, (self, predicate) => {
	const input = Array.isArray(self) ? self : Array.from(self);
	const len = input.length;
	let idx = 0;
	while (idx < len && predicate(input[idx], idx)) idx++;
	return input.slice(0, idx);
});
//#endregion
//#region src/regexp.ts
const RE_HTML_TAG = /^[a-z][^-]*$/u;
const RE_TS_EXT = /^[cm]?tsx?$/u;
const RE_JS_EXT = /^[cm]?jsx?$/u;
const RE_PASCAL_CASE = /^[A-Z][\dA-Za-z]*$/u;
const RE_CAMEL_CASE = /^[a-z][\dA-Za-z]*$/u;
const RE_KEBAB_CASE = /^[a-z][\d\-a-z]*$/u;
const RE_SNAKE_CASE = /^[a-z][\d_a-z]*$/u;
const RE_CONSTANT_CASE = /^[A-Z][\d_A-Z]*$/u;
const RE_JAVASCRIPT_PROTOCOL = /^[\u0000-\u001F ]*j[\t\n\r]*a[\t\n\r]*v[\t\n\r]*a[\t\n\r]*s[\t\n\r]*c[\t\n\r]*r[\t\n\r]*i[\t\n\r]*p[\t\n\r]*t[\t\n\r]*:/iu;
const RE_JS_IDENTIFIER = /^[_$a-z][\w$]*$/i;
const RE_REGEXP_STR = /^\/(.+)\/([A-Za-z]*)$/u;
const RE_ANNOTATION_JSX = /@jsx\s+(\S+)/u;
const RE_ANNOTATION_JSX_FRAG = /@jsxFrag\s+(\S+)/u;
const RE_ANNOTATION_JSX_RUNTIME = /@jsxRuntime\s+(\S+)/u;
const RE_ANNOTATION_JSX_IMPORT_SOURCE = /@jsxImportSource\s+(\S+)/u;
const RE_COMPONENT_NAME = /^[A-Z]/u;
const RE_COMPONENT_NAME_LOOSE = /^_?[A-Z]/u;
const RE_HOOK_NAME = /^use/u;
function toRegExp(string) {
	if (string == null) return { test: constFalse };
	const [, pattern, flags = "u"] = RE_REGEXP_STR.exec(string) ?? [];
	if (pattern != null) return new RegExp(pattern, flags);
	return { test: (s) => s === string };
}
function isRegExp(string) {
	return RE_REGEXP_STR.test(string);
}
//#endregion
//#region src/settings.ts
const ESLintReactSettingsSchema = z.object({
	importSource: z.optional(z.string()),
	compilationMode: z.optional(z.enum([
		"infer",
		"annotation",
		"syntax",
		"all"
	])),
	polymorphicPropName: z.optional(z.string()),
	version: z.optional(z.string()),
	additionalRefHooks: z.optional(z.string()),
	additionalStateHooks: z.optional(z.string()),
	additionalEffectHooks: z.optional(z.string())
});
const ESLintSettingsSchema = z.optional(z.object({ "react-x": z.optional(z.unknown()) }));
const DEFAULT_ESLINT_REACT_SETTINGS = {
	version: "detect",
	importSource: "react",
	polymorphicPropName: "as"
};
const DEFAULT_ESLINT_SETTINGS = { "react-x": DEFAULT_ESLINT_REACT_SETTINGS };
function isESLintSettings(settings) {
	return ESLintSettingsSchema.safeParse(settings).success;
}
function isESLintReactSettings(settings) {
	return ESLintReactSettingsSchema.safeParse(settings).success;
}
const decodeESLintSettings = (settings) => {
	if (isESLintSettings(settings)) return settings;
	return DEFAULT_ESLINT_SETTINGS;
};
const decodeSettings = (settings) => {
	if (isESLintReactSettings(settings)) return settings;
	return DEFAULT_ESLINT_REACT_SETTINGS;
};
const normalizeSettings = ({ importSource = "react", compilationMode, polymorphicPropName = "as", version, additionalRefHooks, additionalStateHooks, additionalEffectHooks, ...rest }) => {
	return {
		...rest,
		importSource,
		compilationMode: compilationMode ?? "off",
		polymorphicPropName,
		version: match(version).with(P.union(P.nullish, "", "detect"), () => getReactVersion("19.3.0")).otherwise(identity),
		additionalRefHooks: toRegExp(additionalRefHooks),
		additionalStateHooks: toRegExp(additionalStateHooks),
		additionalEffectHooks: toRegExp(additionalEffectHooks)
	};
};
function getReactVersion(fallback) {
	try {
		return match(module.createRequire(process.cwd() + path.sep)("react")).with({ version: P.select(P.string) }, identity).otherwise(() => fallback);
	} catch {
		return fallback;
	}
}
const getNormalizedSettings = memoize((settings) => normalizeSettings(decodeSettings(settings)));
function getSettingsFromContext(context) {
	return getNormalizedSettings(context.settings["react-x"]);
}
//#endregion
export { DEFAULT_ESLINT_REACT_SETTINGS, DEFAULT_ESLINT_SETTINGS, ESLintReactSettingsSchema, ESLintSettingsSchema, RE_ANNOTATION_JSX, RE_ANNOTATION_JSX_FRAG, RE_ANNOTATION_JSX_IMPORT_SOURCE, RE_ANNOTATION_JSX_RUNTIME, RE_CAMEL_CASE, RE_COMPONENT_NAME, RE_COMPONENT_NAME_LOOSE, RE_CONSTANT_CASE, RE_HOOK_NAME, RE_HTML_TAG, RE_JAVASCRIPT_PROTOCOL, RE_JS_EXT, RE_JS_IDENTIFIER, RE_KEBAB_CASE, RE_PASCAL_CASE, RE_REGEXP_STR, RE_SNAKE_CASE, RE_TS_EXT, decodeESLintSettings, decodeSettings, getNormalizedSettings, getReactVersion, getSettingsFromContext, isESLintReactSettings, isESLintSettings, isRegExp, normalizeSettings, toRegExp };
