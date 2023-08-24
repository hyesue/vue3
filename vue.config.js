const {defineConfig} = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4000, // 변경할 포트 번호를 입력합니다.
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // @ 별칭 설정
        // 다른 별칭도 필요한 경우 아래와 같이 추가할 수 있습니다.
        // '~components': path.resolve(__dirname, 'src/components')
      },
    },
  },
});
