import type { FlatESLintConfigItem } from 'eslint-define-config'
import { getPackageInfoSync } from 'local-pkg'
import { GLOB_VUE } from '../globs'
import { parserTs, parserVue, pluginVue } from '../plugins'
import { OFF } from '../flags'
import type { OptionsHasTypeScript } from '../types'

const pkg = getPackageInfoSync('vue')
let vueVersion = pkg && pkg.version
vueVersion = (vueVersion && vueVersion[0])
vueVersion = Number.isNaN(vueVersion) ? '3' : vueVersion

export function vue(options: OptionsHasTypeScript = {}): FlatESLintConfigItem[] {
    return [
        {
            files: [GLOB_VUE],
            languageOptions: {
                parser: parserVue,
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true,
                    },
                    extraFileExtensions: ['.vue'],
                    parser: options.typescript ? parserTs as any : null,
                    sourceType: 'module',
                },
            },
            plugins: {
                vue: pluginVue,
            },
            processor: pluginVue.processors['.vue'],
            rules: {
                ...pluginVue.configs.base.rules as any,
                ...(vueVersion === '3'
                    ? {
                            ...pluginVue.configs['vue3-essential'].rules as any,
                            ...pluginVue.configs['vue3-strongly-recommended'].rules as any,
                            ...pluginVue.configs['vue3-recommended'].rules as any,
                        }
                    : {
                            ...pluginVue.configs.essential.rules as any,
                            ...pluginVue.configs['strongly-recommended'].rules as any,
                            ...pluginVue.configs.recommended.rules as any,
                        }),

                'vue/array-bracket-spacing': ['error', 'never'],
                'vue/arrow-spacing': ['error', { after: true, before: true }],
                'vue/block-order': ['error', {
                    order: ['template', 'script', 'style'],
                }],
                'vue/block-spacing': ['error', 'always'],
                'vue/block-tag-newline': ['error', {
                    multiline: 'always',
                    singleline: 'always',
                }],
                'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
                'vue/comma-dangle': ['error', 'always-multiline'],
                'vue/comma-spacing': ['error', { after: true, before: false }],
                'vue/comma-style': ['error', 'last'],

                'vue/component-name-in-template-casing': ['error', 'PascalCase'],
                'vue/component-options-name-casing': ['error', 'PascalCase'],
                'vue/custom-event-name-casing': vueVersion === '3' ? ['error', 'camelCase'] : ['error', 'kebab-case'],
                ...(vueVersion === '2' ? { 'vue/require-explicit-emits': 'off' } : null),
                'vue/define-macros-order': ['error', {
                    order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
                }],
                'vue/dot-location': ['error', 'property'],
                'vue/dot-notation': ['error', { allowKeywords: true }],
                'vue/eqeqeq': ['error', 'smart'],
                'vue/html-indent': ['error', 4, {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: [],
                }],
                'vue/html-comment-content-spacing': ['error', 'always', {
                    exceptions: ['-'],
                }],
                'vue/html-self-closing': ['error', {
                    html: {
                        void: 'never',
                        normal: 'any',
                        component: 'any',
                    },
                    svg: 'always',
                    math: 'always',
                }],
                'vue/key-spacing': ['error', { afterColon: true, beforeColon: false }],
                'vue/keyword-spacing': ['error', { after: true, before: true }],
                'vue/max-attributes-per-line': OFF,
                'vue/multi-word-component-names': OFF,
                'vue/no-constant-condition': 'warn',
                'vue/no-dupe-keys': OFF,
                'vue/no-empty-pattern': 'error',
                'vue/no-extra-parens': ['error', 'functions'],
                'vue/no-irregular-whitespace': 'error',
                'vue/no-loss-of-precision': 'error',
                'vue/no-restricted-syntax': [
                    'error',
                    'DebuggerStatement',
                    'LabeledStatement',
                    'WithStatement',
                ],
                'vue/no-restricted-v-bind': ['error', '/^v-/'],

                // reactivity transform
                'vue/no-setup-props-reactivity-loss': OFF,
                'vue/no-sparse-arrays': 'error',
                'vue/no-unused-refs': 'error',
                'vue/no-useless-v-bind': 'error',
                'vue/no-v-html': OFF,
                'vue/no-v-text-v-html-on-component': OFF,
                'vue/object-curly-newline': ['error', { consistent: true, multiline: true }],
                'vue/object-curly-spacing': ['error', 'always'],
                'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
                'vue/object-shorthand': [
                    'error',
                    'always',
                    {
                        avoidQuotes: true,
                        ignoreConstructors: false,
                    },
                ],
                'vue/operator-linebreak': ['error', 'before'],
                'vue/padding-line-between-blocks': ['error', 'always'],
                'vue/prefer-separate-static-class': 'error',
                'vue/prefer-template': 'error',
                'vue/quote-props': ['error', 'consistent-as-needed'],
                'vue/require-default-prop': OFF,
                'vue/require-prop-types': OFF,
                'vue/space-in-parens': ['error', 'never'],
                'vue/space-infix-ops': 'error',
                'vue/space-unary-ops': ['error', { nonwords: false, words: true }],
                'vue/template-curly-spacing': 'error',
                'vue/singleline-html-element-content-newline': 'off',
            },
        },
    ]
}
