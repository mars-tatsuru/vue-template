// @ts-check
import antfu from '@antfu/eslint-config' // https://github.com/antfu/eslint-config package for eslint
import tailwind from 'eslint-plugin-tailwindcss'
import pluginUnusedImports from 'eslint-plugin-unused-imports'

export default antfu(
  {
    formatters: true,
  },

  /************************************************
   * Setting unused import rules
   *************************************************/
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  /************************************************
   * Setting Tailwind CSS rules
   *************************************************/
  ...tailwind.configs['flat/recommended'],
)

// TODO: Scratch code
// import globals from 'globals'
// import pluginJs from '@eslint/js'
// import tseslint from 'typescript-eslint'
// import pluginVue from 'eslint-plugin-vue'
// import format from 'eslint-plugin-format' //https://github.com/antfu/eslint-plugin-format

// // Prettier settings
// const rules = {
//   tabWidth: 2,
//   useTabs: false,
//   endOfLine: 'lf',
//   trimTrailingWhitespace: true,
//   insertFinalNewline: true,
//   singleQuote: true,
//   semi: false,
//   printWidth: 100,
// }

// // eslint settings
// export default [
//   /************************************************
//    * Setting rule
//    *************************************************/
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...pluginVue.configs['flat/recommended'],

//   /***************************************************
//    * Setting up the file to which the rule is applied
//    ****************************************************/
//   {
//     files: ['**/*.{js,mjs,cjs,ts,vue}'],
//   },

//   /************************************************
//    * Setting globals
//    *************************************************/
//   // This configures global variables, allowing the use of variables like 'document' and 'window'.
//   // Normally, these would trigger "undefined variable" errors, but setting them here prevents those errors.
//   {
//     languageOptions: { globals: [globals.browser] },
//   },

//   /************************************************
//    * Setting format rules
//    *************************************************/
//   // Parser is a tool that analyzes code.
//   {
//     files: ['**/*.vue', '**/*.ts', '**/*.js', '**/*.mts', '**/*.mjs', '**/*.cts', '**/*.cjs'],

//     // Configuring the parser to analyze TypeScript code within Vue files.
//     languageOptions: { parserOptions: { parser: tseslint.parser } },

//     // format setting
//     plugins: {
//       format,
//     },

//     // Setting rules for format
//     rules: {
//       'format/prettier': ['error', rules],
//     },
//   },
// ]
