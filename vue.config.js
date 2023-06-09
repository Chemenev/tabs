const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/style.scss";',
      },
      postcss: {
        postcssOptions: {
          plugins: [
            [
              'autoprefixer',
              {
                overrideBrowserslist: ['last 3 versions'],
              },
            ],
          ],
        },
      },
    },
  },
};
