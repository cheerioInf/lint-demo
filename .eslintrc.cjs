// eslint-disable-next-line no-undef
module.exports = {
	// 运行环境
	env: {
		browser: true,
		es2021: true
	},
	// 继承
	extends: [
		"eslint:recommended", // eslint 推荐规则
		"plugin:@typescript-eslint/recommended", // ts 推荐规则
		"plugin:react/recommended" // react 推荐规则
	],
	// 解析器
	parser: "@typescript-eslint/parser",
	// 解析器配置
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module" // 默认为 script，使用 esm 时需要设置为 module
	},
	// 插件
	plugins: [
		"@typescript-eslint", // 添加 ts 的相关规则支持
		"react" // 添加 react 的相关规则支持
	],
	// 规则
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"react/react-in-jsx-scope": "off"
	}
};
