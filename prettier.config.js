/** @type {import("prettier").Options} */
const config = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  jsxSingleQuote: true,

  importOrder: ['^@app/(.*)$', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['importAttributes', 'typescript', 'jsx'],
};

export default config;
