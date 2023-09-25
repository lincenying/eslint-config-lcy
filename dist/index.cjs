"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  combine: () => combine,
  comments: () => comments,
  default: () => src_default,
  ignores: () => ignores,
  imports: () => imports,
  javascript: () => javascript,
  javascriptStylistic: () => javascriptStylistic,
  jsdoc: () => jsdoc,
  jsonc: () => jsonc,
  lincy: () => lincy,
  markdown: () => markdown,
  node: () => node,
  parserJsonc: () => import_jsonc_eslint_parser.default,
  parserTs: () => import_parser.default,
  parserVue: () => import_vue_eslint_parser.default,
  parserYml: () => import_yaml_eslint_parser.default,
  pluginAntfu: () => import_eslint_plugin_antfu.default,
  pluginComments: () => import_eslint_plugin_eslint_comments.default,
  pluginImport: () => import_eslint_plugin_i.default,
  pluginJsdoc: () => import_eslint_plugin_jsdoc.default,
  pluginJsonc: () => import_eslint_plugin_jsonc.default,
  pluginMarkdown: () => import_eslint_plugin_markdown.default,
  pluginNoOnlyTests: () => import_eslint_plugin_no_only_tests.default,
  pluginNode: () => import_eslint_plugin_n.default,
  pluginStylisticJs: () => import_eslint_plugin_js.default,
  pluginStylisticTs: () => import_eslint_plugin_ts.default,
  pluginTs: () => import_eslint_plugin.default,
  pluginUnicorn: () => import_eslint_plugin_unicorn.default,
  pluginUnusedImports: () => import_eslint_plugin_unused_imports.default,
  pluginVue: () => import_eslint_plugin_vue.default,
  pluginYml: () => import_eslint_plugin_yml.default,
  renameRules: () => renameRules,
  sortPackageJson: () => sortPackageJson,
  sortTsconfig: () => sortTsconfig,
  test: () => test,
  typescript: () => typescript,
  typescriptStylistic: () => typescriptStylistic,
  typescriptWithLanguageServer: () => typescriptWithLanguageServer,
  unicorn: () => unicorn,
  vue: () => vue,
  yml: () => yml
});
module.exports = __toCommonJS(src_exports);

// node_modules/.pnpm/tsup@7.2.0_typescript@5.2.2/node_modules/tsup/assets/cjs_shims.js
var getImportMetaUrl = () => typeof document === "undefined" ? new URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
var importMetaUrl = /* @__PURE__ */ getImportMetaUrl();

// src/factory.ts
var import_node_process2 = __toESM(require("process"), 1);
var import_node_fs = __toESM(require("fs"), 1);

// node_modules/.pnpm/local-pkg@0.4.3/node_modules/local-pkg/index.mjs
var import_path = require("path");
var import_fs = require("fs");
var import_module = require("module");
var _require = (0, import_module.createRequire)(importMetaUrl);
function isPackageExists(name, options) {
  return !!resolvePackage(name, options);
}
function getPackageJsonPath(name, options) {
  const entry = resolvePackage(name, options);
  if (!entry)
    return;
  return searchPackageJSON(entry);
}
function getPackageInfoSync(name, options) {
  const packageJsonPath = getPackageJsonPath(name, options);
  if (!packageJsonPath)
    return;
  const pkg2 = JSON.parse((0, import_fs.readFileSync)(packageJsonPath, "utf8"));
  return {
    name,
    version: pkg2.version,
    rootPath: (0, import_path.dirname)(packageJsonPath),
    packageJsonPath,
    packageJson: pkg2
  };
}
function resolvePackage(name, options = {}) {
  try {
    return _require.resolve(`${name}/package.json`, options);
  } catch {
  }
  try {
    return _require.resolve(name, options);
  } catch (e) {
    if (e.code !== "MODULE_NOT_FOUND")
      console.error(e);
    return false;
  }
}
function searchPackageJSON(dir) {
  let packageJsonPath;
  while (true) {
    if (!dir)
      return;
    const newDir = (0, import_path.dirname)(dir);
    if (newDir === dir)
      return;
    dir = newDir;
    packageJsonPath = (0, import_path.join)(dir, "package.json");
    if ((0, import_fs.existsSync)(packageJsonPath))
      break;
  }
  return packageJsonPath;
}

// src/factory.ts
var import_eslint_config_flat_gitignore = __toESM(require("eslint-config-flat-gitignore"), 1);

// src/flags.ts
var OFF = 0;

// src/plugins.ts
var import_eslint_plugin_antfu = __toESM(require("eslint-plugin-antfu"), 1);
var import_eslint_plugin_eslint_comments = __toESM(require("eslint-plugin-eslint-comments"), 1);
var import_eslint_plugin_i = __toESM(require("eslint-plugin-i"), 1);
var import_eslint_plugin_jsdoc = __toESM(require("eslint-plugin-jsdoc"), 1);
var import_eslint_plugin_jsonc = __toESM(require("eslint-plugin-jsonc"), 1);
var import_eslint_plugin_markdown = __toESM(require("eslint-plugin-markdown"), 1);
var import_eslint_plugin_n = __toESM(require("eslint-plugin-n"), 1);
var import_eslint_plugin_js = __toESM(require("@stylistic/eslint-plugin-js"), 1);
var import_eslint_plugin_ts = __toESM(require("@stylistic/eslint-plugin-ts"), 1);
var import_eslint_plugin = __toESM(require("@typescript-eslint/eslint-plugin"), 1);
var import_eslint_plugin_unicorn = __toESM(require("eslint-plugin-unicorn"), 1);
var import_eslint_plugin_unused_imports = __toESM(require("eslint-plugin-unused-imports"), 1);
var import_eslint_plugin_vue = __toESM(require("eslint-plugin-vue"), 1);
var import_eslint_plugin_yml = __toESM(require("eslint-plugin-yml"), 1);
var import_eslint_plugin_no_only_tests = __toESM(require("eslint-plugin-no-only-tests"), 1);
var import_parser = __toESM(require("@typescript-eslint/parser"), 1);
var import_vue_eslint_parser = __toESM(require("vue-eslint-parser"), 1);
var import_yaml_eslint_parser = __toESM(require("yaml-eslint-parser"), 1);
var import_jsonc_eslint_parser = __toESM(require("jsonc-eslint-parser"), 1);

// src/configs/comments.ts
var comments = [
  {
    plugins: {
      "eslint-comments": import_eslint_plugin_eslint_comments.default
    },
    rules: {
      ...import_eslint_plugin_eslint_comments.default.configs.recommended.rules,
      "eslint-comments/disable-enable-pair": OFF
    }
  }
];

// src/globs.ts
var GLOB_SRC_EXT = "?([cm])[jt]s?(x)";
var GLOB_SRC = "**/*.?([cm])[jt]s?(x)";
var GLOB_TS = "**/*.?([cm])ts";
var GLOB_TSX = "**/*.?([cm])tsx";
var GLOB_JSON = "**/*.json";
var GLOB_JSON5 = "**/*.json5";
var GLOB_JSONC = "**/*.jsonc";
var GLOB_MARKDOWN = "**/*.md";
var GLOB_VUE = "**/*.vue";
var GLOB_YAML = "**/*.y?(a)ml";
var GLOB_MARKDOWN_CODE = `${GLOB_MARKDOWN}/${GLOB_SRC}`;
var GLOB_TESTS = [
  `**/__tests__/**/*.${GLOB_SRC_EXT}`,
  `**/*.spec.${GLOB_SRC_EXT}`,
  `**/*.test.${GLOB_SRC_EXT}`
];
var GLOB_EXCLUDE = [
  "**/node_modules",
  "**/dist",
  "**/package-lock.json",
  "**/yarn.lock",
  "**/pnpm-lock.yaml",
  "**/output",
  "**/coverage",
  "**/temp",
  "**/.vitepress/cache",
  "**/.nuxt",
  "**/.vercel",
  "**/.changeset",
  "**/.idea",
  "**/.output",
  "**/.vite-inspect",
  "**/CHANGELOG*.md",
  "**/*.min.*",
  "**/LICENSE*",
  "**/__snapshots__",
  "**/auto-import?(s).d.ts",
  "**/components.d.ts"
];

// src/configs/ignores.ts
var ignores = [
  { ignores: GLOB_EXCLUDE }
];

// src/configs/imports.ts
var imports = [
  {
    plugins: {
      import: import_eslint_plugin_i.default
    },
    rules: {
      "import/export": "error",
      "import/first": "error",
      "import/newline-after-import": ["error", { considerComments: true, count: 1 }],
      "import/no-duplicates": "error",
      "import/no-mutable-exports": "error",
      "import/no-named-default": "error",
      "import/no-self-import": "error",
      "import/no-webpack-loader-syntax": "error",
      "import/order": "error"
    }
  }
];

// src/configs/javascript.ts
var import_globals = __toESM(require("globals"), 1);
function javascript(options = {}) {
  return [
    {
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...import_globals.default.browser,
          ...import_globals.default.es2021,
          ...import_globals.default.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly"
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 2022,
          sourceType: "module"
        },
        sourceType: "module"
      },
      plugins: {
        "antfu": import_eslint_plugin_antfu.default,
        "unused-imports": import_eslint_plugin_unused_imports.default
      },
      rules: {
        "accessor-pairs": ["error", { enforceForClassMembers: true, setWithoutGet: true }],
        "antfu/import-dedupe": "error",
        "antfu/no-import-node-modules-by-path": "error",
        "antfu/top-level-function": "error",
        "array-callback-return": "error",
        "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
        "block-scoped-var": "error",
        "constructor-super": "error",
        "default-case-last": "error",
        "dot-notation": ["error", { allowKeywords: true }],
        "eol-last": "error",
        "eqeqeq": ["error", "smart"],
        "max-statements-per-line": ["error", { max: 1 }],
        "new-cap": ["error", { capIsNew: false, newIsCap: true, properties: true }],
        "new-parens": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["error", "always"],
        // 'no-console': ['error', { allow: ['warn', 'error'] }],
        "no-console": OFF,
        "no-const-assign": "error",
        "no-constant-condition": "warn",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": ["error", "functions"],
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
        "no-lone-blocks": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-mixed-operators": ["error", {
          allowSamePrecedence: true,
          groups: [
            ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
            ["&&", "||"],
            ["in", "instanceof"]
          ]
        }],
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": ["error", { builtinGlobals: false }],
        "no-regex-spaces": "error",
        "no-restricted-globals": [
          "error",
          { message: "Use `globalThis` instead.", name: "global" },
          { message: "Use `globalThis` instead.", name: "self" }
        ],
        "no-restricted-properties": [
          "error",
          { message: "Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.", property: "__proto__" },
          { message: "Use `Object.defineProperty` instead.", property: "__defineGetter__" },
          { message: "Use `Object.defineProperty` instead.", property: "__defineSetter__" },
          { message: "Use `Object.getOwnPropertyDescriptor` instead.", property: "__lookupGetter__" },
          { message: "Use `Object.getOwnPropertyDescriptor` instead.", property: "__lookupSetter__" }
        ],
        "no-restricted-syntax": [
          "error",
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement"
        ],
        "no-self-assign": ["error", { props: true }],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": ["error", {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true
        }],
        "no-unused-vars": ["error", {
          args: "none",
          caughtErrors: "none",
          ignoreRestSiblings: true,
          vars: "all"
        }],
        "no-use-before-define": ["error", { classes: false, functions: false, variables: true }],
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-with": "error",
        "object-shorthand": [
          "error",
          "always",
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        "one-var": ["error", { initialized: "never" }],
        "prefer-arrow-callback": [
          "error",
          {
            allowNamedFunctions: false,
            allowUnboundThis: true
          }
        ],
        "prefer-const": [
          "error",
          {
            destructuring: "all",
            ignoreReadBeforeAssign: true
          }
        ],
        "prefer-exponentiation-operator": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": ["error", "consistent-as-needed"],
        "sort-imports": [
          "error",
          {
            allowSeparatedGroups: false,
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
          }
        ],
        "symbol-description": "error",
        "unicode-bom": ["error", "never"],
        "unused-imports/no-unused-imports": options.isInEditor ? OFF : "error",
        "unused-imports/no-unused-vars": [
          "error",
          { args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" }
        ],
        "use-isnan": ["error", { enforceForIndexOf: true, enforceForSwitchCase: true }],
        "valid-typeof": ["error", { requireStringLiterals: true }],
        "vars-on-top": "error",
        "wrap-iife": ["error", "any", { functionPrototypeMethods: true }],
        "yoda": ["error", "never"]
      }
    },
    {
      files: [`scripts/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
      rules: {
        "no-console": OFF
      }
    }
  ];
}

// src/configs/jsdoc.ts
var jsdoc = [
  {
    plugins: {
      jsdoc: import_eslint_plugin_jsdoc.default
    },
    rules: {
      ...import_eslint_plugin_jsdoc.default.configs["flat/recommended-typescript"].rules,
      "jsdoc/check-tag-names": OFF,
      "jsdoc/check-values": OFF,
      "jsdoc/no-undefined-types": OFF,
      "jsdoc/require-jsdoc": OFF,
      "jsdoc/require-param": OFF,
      "jsdoc/require-param-description": OFF,
      "jsdoc/require-param-type": OFF,
      "jsdoc/require-returns": OFF,
      "jsdoc/require-returns-type": OFF,
      "jsdoc/require-throws": OFF,
      "jsdoc/require-yields": OFF,
      "jsdoc/tag-lines": OFF
    }
  }
];

// src/configs/jsonc.ts
var jsonc = [
  {
    files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
    languageOptions: {
      parser: import_jsonc_eslint_parser.default
    },
    plugins: {
      jsonc: import_eslint_plugin_jsonc.default
    },
    rules: {
      ...import_eslint_plugin_jsonc.default.configs["recommended-with-jsonc"].rules,
      "jsonc/array-bracket-spacing": ["error", "never"],
      "jsonc/comma-dangle": ["error", "never"],
      "jsonc/comma-style": ["error", "last"],
      "jsonc/indent": ["error", 2],
      "jsonc/key-spacing": ["error", { afterColon: true, beforeColon: false }],
      "jsonc/no-octal-escape": "error",
      "jsonc/object-curly-newline": ["error", { consistent: true, multiline: true }],
      "jsonc/object-curly-spacing": ["error", "always"],
      "jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }]
    }
  }
];

// src/configs/markdown.ts
function markdown(options = {}) {
  const {
    componentExts = []
  } = options;
  return [
    {
      files: [GLOB_MARKDOWN],
      plugins: {
        markdown: import_eslint_plugin_markdown.default
      },
      processor: "markdown/markdown"
    },
    {
      files: [
        GLOB_MARKDOWN_CODE,
        ...componentExts.map((ext) => `${GLOB_MARKDOWN}/**/*.${ext}`)
      ],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true
          }
        }
      },
      plugins: {
        ts: import_eslint_plugin.default
      },
      rules: {
        ...import_eslint_plugin_markdown.default.configs.recommended.overrides[1].rules,
        "antfu/no-cjs-exports": OFF,
        "antfu/no-ts-export-equal": OFF,
        "import/no-unresolved": OFF,
        "no-alert": OFF,
        "no-console": OFF,
        "no-restricted-imports": OFF,
        "no-undef": OFF,
        "no-unused-expressions": OFF,
        "no-unused-vars": OFF,
        "node/prefer-global/process": OFF,
        "ts/comma-dangle": OFF,
        "ts/consistent-type-imports": OFF,
        "ts/no-namespace": OFF,
        "ts/no-redeclare": OFF,
        "ts/no-require-imports": OFF,
        "ts/no-unused-vars": OFF,
        "ts/no-use-before-define": OFF,
        "ts/no-var-requires": OFF,
        "unused-imports/no-unused-imports": OFF,
        "unused-imports/no-unused-vars": OFF
      }
    }
  ];
}

// src/configs/node.ts
var node = [
  {
    plugins: {
      node: import_eslint_plugin_n.default
    },
    rules: {
      "node/handle-callback-err": ["error", "^(err|error)$"],
      "node/no-deprecated-api": "error",
      "node/no-exports-assign": "error",
      "node/no-new-require": "error",
      "node/no-path-concat": "error",
      "node/prefer-global/buffer": ["error", "never"],
      "node/prefer-global/process": ["error", "never"],
      "node/process-exit-as-throw": "error"
    }
  }
];

// src/configs/sort.ts
var sortPackageJson = [
  {
    files: ["**/package.json"],
    rules: {
      "jsonc/sort-array-values": [
        "error",
        {
          order: { type: "asc" },
          pathPattern: "^files$"
        }
      ],
      "jsonc/sort-keys": [
        "error",
        {
          order: [
            "publisher",
            "name",
            "displayName",
            "type",
            "version",
            "private",
            "packageManager",
            "description",
            "author",
            "license",
            "funding",
            "homepage",
            "repository",
            "bugs",
            "keywords",
            "categories",
            "sideEffects",
            "exports",
            "main",
            "module",
            "unpkg",
            "jsdelivr",
            "types",
            "typesVersions",
            "bin",
            "icon",
            "files",
            "engines",
            "activationEvents",
            "contributes",
            "scripts",
            "peerDependencies",
            "peerDependenciesMeta",
            "dependencies",
            "optionalDependencies",
            "devDependencies",
            "pnpm",
            "overrides",
            "resolutions",
            "husky",
            "simple-git-hooks",
            "lint-staged",
            "eslintConfig"
          ],
          pathPattern: "^$"
        },
        {
          order: { type: "asc" },
          pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$"
        },
        {
          order: { type: "asc" },
          pathPattern: "^resolutions$"
        },
        {
          order: { type: "asc" },
          pathPattern: "^pnpm.overrides$"
        },
        {
          order: [
            "types",
            "import",
            "require",
            "default"
          ],
          pathPattern: "^exports.*$"
        }
      ]
    }
  }
];
var sortTsconfig = [
  {
    files: ["**/tsconfig.json", "**/tsconfig.*.json"],
    rules: {
      "jsonc/sort-keys": [
        "error",
        {
          order: [
            "extends",
            "compilerOptions",
            "references",
            "files",
            "include",
            "exclude"
          ],
          pathPattern: "^$"
        },
        {
          order: [
            /* Projects */
            "incremental",
            "composite",
            "tsBuildInfoFile",
            "disableSourceOfProjectReferenceRedirect",
            "disableSolutionSearching",
            "disableReferencedProjectLoad",
            /* Language and Environment */
            "target",
            "lib",
            "jsx",
            "experimentalDecorators",
            "emitDecoratorMetadata",
            "jsxFactory",
            "jsxFragmentFactory",
            "jsxImportSource",
            "reactNamespace",
            "noLib",
            "useDefineForClassFields",
            "moduleDetection",
            /* Modules */
            "module",
            "rootDir",
            "moduleResolution",
            "baseUrl",
            "paths",
            "rootDirs",
            "typeRoots",
            "types",
            "allowUmdGlobalAccess",
            "moduleSuffixes",
            "allowImportingTsExtensions",
            "resolvePackageJsonExports",
            "resolvePackageJsonImports",
            "customConditions",
            "resolveJsonModule",
            "allowArbitraryExtensions",
            "noResolve",
            /* JavaScript Support */
            "allowJs",
            "checkJs",
            "maxNodeModuleJsDepth",
            /* Emit */
            "declaration",
            "declarationMap",
            "emitDeclarationOnly",
            "sourceMap",
            "inlineSourceMap",
            "outFile",
            "outDir",
            "removeComments",
            "noEmit",
            "importHelpers",
            "importsNotUsedAsValues",
            "downlevelIteration",
            "sourceRoot",
            "mapRoot",
            "inlineSources",
            "emitBOM",
            "newLine",
            "stripInternal",
            "noEmitHelpers",
            "noEmitOnError",
            "preserveConstEnums",
            "declarationDir",
            "preserveValueImports",
            /* Interop Constraints */
            "isolatedModules",
            "verbatimModuleSyntax",
            "allowSyntheticDefaultImports",
            "esModuleInterop",
            "preserveSymlinks",
            "forceConsistentCasingInFileNames",
            /* Type Checking */
            "strict",
            "strictBindCallApply",
            "strictFunctionTypes",
            "strictNullChecks",
            "strictPropertyInitialization",
            "allowUnreachableCode",
            "allowUnusedLabels",
            "alwaysStrict",
            "exactOptionalPropertyTypes",
            "noFallthroughCasesInSwitch",
            "noImplicitAny",
            "noImplicitOverride",
            "noImplicitReturns",
            "noImplicitThis",
            "noPropertyAccessFromIndexSignature",
            "noUncheckedIndexedAccess",
            "noUnusedLocals",
            "noUnusedParameters",
            "useUnknownInCatchVariables",
            /* Completeness */
            "skipDefaultLibCheck",
            "skipLibCheck"
          ],
          pathPattern: "^compilerOptions$"
        }
      ]
    }
  }
];

// src/configs/stylistic.ts
var import_metadata = require("@eslint-stylistic/metadata");
var tsPackage = import_metadata.packages.find((i) => i.shortId === "ts");
var javascriptStylistic = [
  {
    plugins: {
      style: import_eslint_plugin_js.default
    },
    rules: {
      "antfu/consistent-list-newline": "error",
      "antfu/if-newline": "error",
      "comma-dangle": ["error", "always-multiline"],
      "curly": ["error", "multi-or-nest", "consistent"],
      "quotes": ["error", "single"],
      "semi": ["error", "never"],
      "style/array-bracket-spacing": ["error", "never"],
      "style/arrow-spacing": ["error", { after: true, before: true }],
      "style/block-spacing": ["error", "always"],
      "style/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
      "style/comma-spacing": ["error", { after: true, before: false }],
      "style/comma-style": ["error", "last"],
      "style/computed-property-spacing": ["error", "never", { enforceForClassMembers: true }],
      "style/dot-location": ["error", "property"],
      "style/func-call-spacing": OFF,
      "style/generator-star-spacing": OFF,
      "style/indent": ["error", 4, {
        ArrayExpression: 1,
        CallExpression: { arguments: 1 },
        FunctionDeclaration: { body: 1, parameters: 1 },
        FunctionExpression: { body: 1, parameters: 1 },
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          "TemplateLiteral *",
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
          "TSTypeParameterInstantiation",
          "FunctionExpression > .params[decorators.length > 0]",
          "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
        ],
        offsetTernaryExpressions: true,
        outerIIFEBody: 1
      }],
      "style/key-spacing": ["error", { afterColon: true, beforeColon: false }],
      "style/keyword-spacing": ["error", { after: true, before: true }],
      "style/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
      "style/multiline-ternary": ["error", "always-multiline"],
      "style/no-mixed-spaces-and-tabs": "error",
      "style/no-multi-spaces": "error",
      "style/no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
      "style/no-tabs": "error",
      "style/no-trailing-spaces": "error",
      "style/no-whitespace-before-property": "error",
      "style/object-curly-newline": ["error", { consistent: true, multiline: true }],
      "style/object-curly-spacing": ["error", "always"],
      "style/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
      "style/operator-linebreak": ["error", "before"],
      "style/padded-blocks": ["error", { blocks: "never", classes: "never", switches: "never" }],
      "style/rest-spread-spacing": ["error", "never"],
      "style/semi-spacing": ["error", { after: true, before: false }],
      "style/space-before-blocks": ["error", "always"],
      "style/space-before-function-paren": ["error", { anonymous: "always", asyncArrow: "always", named: "never" }],
      "style/space-in-parens": ["error", "never"],
      "style/space-infix-ops": "error",
      "style/space-unary-ops": ["error", { nonwords: false, words: true }],
      "style/spaced-comment": ["error", "always", {
        block: {
          balanced: true,
          exceptions: ["*"],
          markers: ["!"]
        },
        line: {
          exceptions: ["/", "#"],
          markers: ["/"]
        }
      }],
      "style/template-curly-spacing": "error",
      "style/template-tag-spacing": ["error", "never"],
      "style/yield-star-spacing": ["error", "both"]
    }
  }
];
var typescriptStylistic = [
  {
    plugins: {
      "style-ts": import_eslint_plugin_ts.default,
      "ts": import_eslint_plugin.default
    },
    rules: {
      ...stylisticJsToTS(javascriptStylistic[0].rules),
      "comma-dangle": OFF,
      "quotes": OFF,
      "semi": OFF,
      "style-ts/member-delimiter-style": ["error", { multiline: { delimiter: "none" } }],
      "style-ts/type-annotation-spacing": ["error", {}],
      "ts/comma-dangle": ["error", "always-multiline"],
      "ts/quotes": ["error", "single"],
      "ts/semi": ["error", "never"]
    }
  }
];
function stylisticJsToTS(input) {
  return {
    // turn off all stylistic rules from style
    ...Object.fromEntries(
      Object.entries(input).map(([key]) => {
        if (!key.startsWith("style/"))
          return null;
        const basename = key.replace("style/", "");
        if (tsPackage.rules.find((i) => i.name === basename))
          return [key, OFF];
        return null;
      }).filter(Boolean)
    ),
    // rename all stylistic rules from style to style/ts
    ...Object.fromEntries(
      Object.entries(input).map(([key, value]) => {
        if (!key.startsWith("style/"))
          return null;
        const basename = key.replace("style/", "");
        return tsPackage.rules.find((i) => i.name === basename) ? [`style-ts/${basename}`, value] : null;
      }).filter(Boolean)
    )
  };
}

// src/configs/typescript.ts
var import_node_process = __toESM(require("process"), 1);

// src/utils.ts
function combine(...configs) {
  return configs.flatMap((config) => Array.isArray(config) ? config : [config]);
}
function renameRules(rules, from, to) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      if (key.startsWith(from))
        return [to + key.slice(from.length), value];
      return [key, value];
    })
  );
}

// src/configs/typescript.ts
function typescript(options) {
  const {
    componentExts = []
  } = options ?? {};
  return [
    {
      files: [
        GLOB_TS,
        GLOB_TSX,
        ...componentExts.map((ext) => `**/*.${ext}`)
      ],
      languageOptions: {
        parser: import_parser.default,
        parserOptions: {
          sourceType: "module"
        }
      },
      plugins: {
        antfu: import_eslint_plugin_antfu.default,
        import: import_eslint_plugin_i.default,
        ts: import_eslint_plugin.default
      },
      rules: {
        ...renameRules(
          import_eslint_plugin.default.configs["eslint-recommended"].overrides[0].rules,
          "@typescript-eslint/",
          "ts/"
        ),
        ...renameRules(
          import_eslint_plugin.default.configs.strict.rules,
          "@typescript-eslint/",
          "ts/"
        ),
        "antfu/generic-spacing": "error",
        "antfu/named-tuple-spacing": "error",
        "antfu/no-cjs-exports": "error",
        "antfu/no-const-enum": "error",
        "antfu/no-ts-export-equal": "error",
        "no-dupe-class-members": OFF,
        "no-extra-parens": OFF,
        "no-invalid-this": OFF,
        "no-loss-of-precision": OFF,
        "no-redeclare": OFF,
        "no-use-before-define": OFF,
        "no-useless-constructor": OFF,
        "ts/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
        "ts/ban-ts-ignore": OFF,
        "ts/consistent-indexed-object-style": OFF,
        "ts/consistent-type-definitions": ["error", "interface"],
        "ts/consistent-type-imports": ["error", { disallowTypeAnnotations: false, prefer: "type-imports" }],
        "ts/explicit-function-return-type": OFF,
        "ts/explicit-member-accessibility": OFF,
        "ts/explicit-module-boundary-types": OFF,
        "ts/naming-convention": OFF,
        "ts/no-dupe-class-members": "error",
        "ts/no-dynamic-delete": OFF,
        "ts/no-empty-function": OFF,
        "ts/no-empty-interface": OFF,
        "ts/no-explicit-any": OFF,
        "ts/no-extra-parens": ["error", "functions"],
        "ts/no-invalid-this": "error",
        "ts/no-invalid-void-type": OFF,
        "ts/no-loss-of-precision": "error",
        "ts/no-non-null-assertion": OFF,
        "ts/no-redeclare": "error",
        "ts/no-require-imports": "error",
        "ts/no-unused-vars": OFF,
        "ts/no-use-before-define": ["error", { classes: false, functions: false, variables: true }],
        "ts/parameter-properties": OFF,
        "ts/prefer-ts-expect-error": "error",
        "ts/triple-slash-reference": OFF,
        "ts/unified-signatures": OFF
      }
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "eslint-comments/no-unlimited-disable": OFF,
        "import/no-duplicates": OFF,
        "unused-imports/no-unused-vars": OFF
      }
    },
    {
      files: ["**/*.{test,spec}.ts?(x)"],
      rules: {
        "no-unused-expressions": OFF
      }
    },
    {
      files: ["**/*.js", "**/*.cjs"],
      rules: {
        "ts/no-require-imports": OFF,
        "ts/no-var-requires": OFF
      }
    }
  ];
}
function typescriptWithLanguageServer(options) {
  const {
    componentExts = [],
    tsconfigPath,
    tsconfigRootDir = import_node_process.default.cwd()
  } = options;
  return [
    {
      files: [
        GLOB_TS,
        GLOB_TSX,
        ...componentExts.map((ext) => `**/*.${ext}`)
      ],
      ignores: ["**/*.md/*.*"],
      languageOptions: {
        parser: import_parser.default,
        parserOptions: {
          project: [tsconfigPath],
          tsconfigRootDir
        }
      },
      plugins: {
        ts: import_eslint_plugin.default
      },
      rules: {
        "dot-notation": OFF,
        "no-implied-eval": OFF,
        "no-throw-literal": OFF,
        "ts/await-thenable": "error",
        "ts/dot-notation": ["error", { allowKeywords: true }],
        "ts/no-floating-promises": "error",
        "ts/no-for-in-array": "error",
        "ts/no-implied-eval": "error",
        "ts/no-misused-promises": "error",
        "ts/no-throw-literal": "error",
        "ts/no-unnecessary-type-assertion": "error",
        "ts/no-unsafe-argument": "error",
        "ts/no-unsafe-assignment": "error",
        "ts/no-unsafe-call": "error",
        "ts/no-unsafe-member-access": "error",
        "ts/no-unsafe-return": "error",
        "ts/restrict-plus-operands": "error",
        "ts/restrict-template-expressions": "error",
        "ts/unbound-method": "error"
      }
    }
  ];
}

// src/configs/unicorn.ts
var unicorn = [
  {
    plugins: {
      unicorn: import_eslint_plugin_unicorn.default
    },
    rules: {
      // Pass error message when throwing errors
      "unicorn/error-message": "error",
      // Uppercase regex escapes
      "unicorn/escape-case": "error",
      // Array.isArray instead of instanceof
      "unicorn/no-instanceof-array": "error",
      // Ban `new Array` as `Array` constructor's params are ambiguous
      "unicorn/no-new-array": "error",
      // Prevent deprecated `new Buffer()`
      "unicorn/no-new-buffer": "error",
      // Keep regex literals safe!
      "unicorn/no-unsafe-regex": "error",
      // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
      "unicorn/number-literal-case": "error",
      // includes over indexOf when checking for existence
      "unicorn/prefer-includes": "error",
      // Prefer using the node: protocol
      "unicorn/prefer-node-protocol": "error",
      // Prefer using number properties like `Number.isNaN` rather than `isNaN`
      "unicorn/prefer-number-properties": "error",
      // String methods startsWith/endsWith instead of more complicated stuff
      "unicorn/prefer-string-starts-ends-with": "error",
      // textContent instead of innerText
      "unicorn/prefer-text-content": "error",
      // Enforce throwing type error when throwing error while checking typeof
      "unicorn/prefer-type-error": "error",
      // Use new when throwing error
      "unicorn/throw-new-error": "error"
    }
  }
];

// src/configs/vue.ts
var pkg = getPackageInfoSync("vue");
var vueVersion = pkg && pkg.version;
vueVersion = vueVersion && vueVersion[0];
vueVersion = Number.isNaN(vueVersion) ? "3" : vueVersion;
function vue(options = {}) {
  return [
    {
      files: [GLOB_VUE],
      languageOptions: {
        parser: import_vue_eslint_parser.default,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          extraFileExtensions: [".vue"],
          parser: options.typescript ? import_parser.default : null,
          sourceType: "module"
        }
      },
      plugins: {
        vue: import_eslint_plugin_vue.default
      },
      processor: import_eslint_plugin_vue.default.processors[".vue"],
      rules: {
        ...import_eslint_plugin_vue.default.configs.base.rules,
        ...vueVersion === "3" ? {
          ...import_eslint_plugin_vue.default.configs["vue3-essential"].rules,
          ...import_eslint_plugin_vue.default.configs["vue3-strongly-recommended"].rules,
          ...import_eslint_plugin_vue.default.configs["vue3-recommended"].rules
        } : {
          ...import_eslint_plugin_vue.default.configs.essential.rules,
          ...import_eslint_plugin_vue.default.configs["strongly-recommended"].rules,
          ...import_eslint_plugin_vue.default.configs.recommended.rules
        },
        "node/prefer-global/process": OFF,
        "vue/array-bracket-spacing": ["error", "never"],
        "vue/arrow-spacing": ["error", { after: true, before: true }],
        "vue/block-order": ["error", {
          order: ["template", "script", "style"]
        }],
        "vue/block-spacing": ["error", "always"],
        "vue/block-tag-newline": ["error", {
          multiline: "always",
          singleline: "always"
        }],
        "vue/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
        "vue/comma-dangle": ["error", "always-multiline"],
        "vue/comma-spacing": ["error", { after: true, before: false }],
        "vue/comma-style": ["error", "last"],
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "vue/component-options-name-casing": ["error", "PascalCase"],
        "vue/custom-event-name-casing": vueVersion === "3" ? ["error", "camelCase"] : ["error", "kebab-case"],
        ...vueVersion === "2" ? { "vue/require-explicit-emits": "off" } : null,
        "vue/define-macros-order": ["error", {
          order: ["defineOptions", "defineProps", "defineEmits", "defineSlots"]
        }],
        "vue/dot-location": ["error", "property"],
        "vue/dot-notation": ["error", { allowKeywords: true }],
        "vue/eqeqeq": ["error", "smart"],
        "vue/html-comment-content-spacing": ["error", "always", {
          exceptions: ["-"]
        }],
        "vue/html-indent": ["error", 4, {
          alignAttributesVertically: true,
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          ignores: []
        }],
        "vue/html-self-closing": ["error", {
          html: {
            component: "any",
            normal: "any",
            void: "never"
          },
          math: "always",
          svg: "always"
        }],
        "vue/key-spacing": ["error", { afterColon: true, beforeColon: false }],
        "vue/keyword-spacing": ["error", { after: true, before: true }],
        "vue/max-attributes-per-line": OFF,
        "vue/multi-word-component-names": OFF,
        "vue/no-constant-condition": "warn",
        "vue/no-dupe-keys": OFF,
        "vue/no-empty-pattern": "error",
        "vue/no-extra-parens": ["error", "functions"],
        "vue/no-irregular-whitespace": "error",
        "vue/no-loss-of-precision": "error",
        "vue/no-restricted-syntax": [
          "error",
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement"
        ],
        "vue/no-restricted-v-bind": ["error", "/^v-/"],
        "vue/no-setup-props-reactivity-loss": OFF,
        "vue/no-sparse-arrays": "error",
        "vue/no-unused-refs": "error",
        "vue/no-useless-v-bind": "error",
        "vue/no-v-html": OFF,
        "vue/no-v-text-v-html-on-component": OFF,
        "vue/object-curly-newline": ["error", { consistent: true, multiline: true }],
        "vue/object-curly-spacing": ["error", "always"],
        "vue/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
        "vue/object-shorthand": [
          "error",
          "always",
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        "vue/operator-linebreak": ["error", "before"],
        "vue/padding-line-between-blocks": ["error", "always"],
        "vue/prefer-separate-static-class": "error",
        "vue/prefer-template": "error",
        "vue/quote-props": ["error", "consistent-as-needed"],
        "vue/require-default-prop": OFF,
        "vue/require-prop-types": OFF,
        "vue/singleline-html-element-content-newline": "off",
        "vue/space-in-parens": ["error", "never"],
        "vue/space-infix-ops": "error",
        "vue/space-unary-ops": ["error", { nonwords: false, words: true }],
        "vue/template-curly-spacing": "error"
      }
    }
  ];
}

// src/configs/yml.ts
var yml = [
  {
    files: [GLOB_YAML],
    languageOptions: {
      parser: import_yaml_eslint_parser.default
    },
    plugins: {
      yml: import_eslint_plugin_yml.default
    },
    rules: {
      ...import_eslint_plugin_yml.default.configs.standard.rules,
      "style/spaced-comment": OFF,
      "yml/no-empty-document": OFF,
      "yml/no-empty-mapping-value": OFF,
      "yml/quotes": ["error", { avoidEscape: false, prefer: "single" }]
    }
  }
];

// src/configs/test.ts
function test(options = {}) {
  return [
    {
      files: GLOB_TESTS,
      plugins: {
        "no-only-tests": import_eslint_plugin_no_only_tests.default
      },
      rules: {
        "no-only-tests/no-only-tests": options.isInEditor ? OFF : "error"
      }
    }
  ];
}

// src/factory.ts
var flatConfigProps = [
  "files",
  "ignores",
  "languageOptions",
  "linterOptions",
  "processor",
  "plugins",
  "rules",
  "settings"
];
function lincy(options = {}, ...userConfigs) {
  const isInEditor = options.isInEditor ?? !!((import_node_process2.default.env.VSCODE_PID || import_node_process2.default.env.JETBRAINS_IDE) && !import_node_process2.default.env.CI);
  const enableVue = options.vue ?? (isPackageExists("vue") || isPackageExists("nuxt") || isPackageExists("vitepress") || isPackageExists("@slidev/cli"));
  const enableTypeScript = options.typescript ?? isPackageExists("typescript");
  const enableStylistic = options.stylistic ?? true;
  const enableGitignore = options.gitignore ?? true;
  const configs = [];
  if (enableGitignore) {
    if (typeof enableGitignore !== "boolean") {
      configs.push([(0, import_eslint_config_flat_gitignore.default)(enableGitignore)]);
    } else {
      if (import_node_fs.default.existsSync(".gitignore"))
        configs.push([(0, import_eslint_config_flat_gitignore.default)()]);
    }
  }
  configs.push(
    ignores,
    javascript({ isInEditor }),
    comments,
    node,
    jsdoc,
    imports,
    unicorn
  );
  const componentExts = [];
  if (enableVue)
    componentExts.push("vue");
  if (enableStylistic)
    configs.push(javascriptStylistic);
  if (enableTypeScript) {
    configs.push(typescript({ componentExts }));
    if (typeof enableTypeScript !== "boolean") {
      configs.push(typescriptWithLanguageServer({
        ...enableTypeScript,
        componentExts
      }));
    }
    if (enableStylistic)
      configs.push(typescriptStylistic);
  }
  if (options.test ?? true)
    configs.push(test({ isInEditor }));
  if (enableVue)
    configs.push(vue({ typescript: !!enableTypeScript }));
  if (options.jsonc ?? true) {
    configs.push(
      jsonc,
      sortPackageJson,
      sortTsconfig
    );
  }
  if (options.yaml ?? true)
    configs.push(yml);
  if (options.markdown ?? true)
    configs.push(markdown({ componentExts }));
  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options)
      acc[key] = options[key];
    return acc;
  }, {});
  if (Object.keys(fusedConfig).length)
    configs.push([fusedConfig]);
  return combine(
    ...configs,
    ...userConfigs
  );
}

// src/index.ts
var src_default = lincy;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  combine,
  comments,
  ignores,
  imports,
  javascript,
  javascriptStylistic,
  jsdoc,
  jsonc,
  lincy,
  markdown,
  node,
  parserJsonc,
  parserTs,
  parserVue,
  parserYml,
  pluginAntfu,
  pluginComments,
  pluginImport,
  pluginJsdoc,
  pluginJsonc,
  pluginMarkdown,
  pluginNoOnlyTests,
  pluginNode,
  pluginStylisticJs,
  pluginStylisticTs,
  pluginTs,
  pluginUnicorn,
  pluginUnusedImports,
  pluginVue,
  pluginYml,
  renameRules,
  sortPackageJson,
  sortTsconfig,
  test,
  typescript,
  typescriptStylistic,
  typescriptWithLanguageServer,
  unicorn,
  vue,
  yml
});
