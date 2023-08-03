const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		port: 4000, // 변경할 포트 번호를 입력합니다.
	},
});
