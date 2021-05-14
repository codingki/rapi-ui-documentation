module.exports = {
	title: 'Rapi UI',
	tagline: 'Beautiful components for your React Native apps',
	url: 'https://rapi-ui.kikiding.space',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'codingki', // Usually your GitHub org/user name.
	projectName: 'react-native-rapi-ui', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'react-native-rapi-ui',

			// logo: {
			// 	alt: 'My Site Logo',
			// 	src: 'img/logo.svg',
			// },
			items: [
				{
					type: 'docsVersion',
					position: 'left',
					// to: "/path // by default, link to active/latest version
					label: '0.2.0', // by default, show active/latest version label
				},
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'right',
				},
				{
					href: 'https://twitter.com/kikiding',
					label: 'Twitter',
					position: 'right',
				},
				{
					href: 'https://github.com/codingki/react-native-rapi-ui',
					label: 'GitHub',
					position: 'right',
				},
				{
					href: 'https://ko-fi.com/kikiding',
					label: 'Buy me a coffee',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			copyright: `Built with ❤ by @kikiding`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/master/website/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/master/website/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
