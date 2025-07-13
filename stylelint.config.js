module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules', 'at-rules'],
    'order/properties-order': [],
    'no-empty-source': null,
    'selector-class-pattern': null,
    'property-no-unknown': [true],
  },
  overrides: [
    {
      files: ['**/*.(scss|css)'],
      customSyntax: 'postcss-scss',
    },
  ],
};
