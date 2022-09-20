module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  proseWrap: 'never',
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
