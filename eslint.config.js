import styleMigrate from '@stylistic/eslint-plugin-migrate'
import lincy from './dist/index.js'

const config = lincy(
    {
        react: true,
        toml: true,
        stylistic: {
            indent: 4,
            quotes: 'single',
            lessOpinionated: true,
        },
        formatters: true,
        overrides: {
            stylistic: {
                'antfu/consistent-list-newline': 'off',
            },
            ignores: [
                '**/assets',
                '**/static',
            ],
        },
    },
    {
        files: ['src/**/*.ts'],
        rules: {
            'perfectionist/sort-objects': 'error',
        },
    },
    {
        files: ['src/configs/*.ts'],
        plugins: {
            'style-migrate': styleMigrate,
        },
        rules: {
            'style-migrate/migrate': ['error', { namespaceTo: 'style' }],
        },
    },
)

export default config
