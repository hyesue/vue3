const productionPlugins = {
  'cssnano': {},
  'postcss-prefix-selector': {
    prefix: '.stds',
    transform: (prefix, selector, prefixedSelector) => {
      if (selector.startsWith(':root')) {
        return selector.replace(':root', prefix);
      }

      return prefixedSelector;
    },
  },
};

/**
 * @see https://tailwindcss.com/docs/optimizing-for-production
 */
module.exports = {
  plugins: {
    'postcss-import': {},
    'autoprefixer': {},
    ...(process.env.NODE_ENV === 'production' ? productionPlugins : {}),
  },
};
