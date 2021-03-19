module.exports = {
	title: 'Rapi UI',
	tagline: 'React native components library',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'facebook', // Usually your GitHub org/user name.
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
					label: '0.1.1', // by default, show active/latest version label
				},
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'right',
				},
				{
					href: 'https://github.com/facebook/docusaurus',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',

			copyright: `Built with love by @kikiding`,
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
