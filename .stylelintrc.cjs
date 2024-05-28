module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html/vue',
    'stylelint-config-recess-order'
  ],
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss'
    }
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep']
      }
    ],
    'selector-class-pattern': null,
    // 'selector-no-vendor-prefix': null,
    // 'value-no-vendor-prefix': null,
    // 'alpha-value-notation': null,
    'color-function-notation': null,
    // 'rule-empty-line-before': null,
    'no-descending-specificity': null,
    // 'number-leading-zero': null,
    // 'declaration-block-no-redundant-longhand-properties': null,
    'font-family-no-missing-generic-family-keyword': null,
    'scss/at-rule-no-unknown': null
  }
}
