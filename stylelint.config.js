module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  rules: {
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'rules',
      'at-rules',
    ],
    'order/properties-order': [],
    'no-empty-source': null,
    'selector-class-pattern': null,
    'property-no-unknown': [true, {
      ignoreProperties: [
      ]
    }],

    'scss/dollar-variable-pattern': '^foo',
    'scss/at-import-no-partial-leading-underscore': true,
  },
}