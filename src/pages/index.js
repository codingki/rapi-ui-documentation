import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
	{
		title: 'Create your UI faster',
		imageUrl: 'img/undraw_maker_launch_crhe.svg',
	},
	{
		title: 'Clean and modern design',
		imageUrl: 'img/undraw_modern_design_v3wv.svg',
	},
	{
		title: 'Easy to use',
		imageUrl: 'img/undraw_feeling_happy_jymo.svg',
	},
];

function Feature({ imageUrl, title, description }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx('col col--4', styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h3 style={{ textAlign: 'center', marginTop: 5, color: '##3F3D56' }}>
				{title}
			</h3>
		</div>
	);
}

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`React native components library ${siteConfig.title}`}
			description="Beautiful components for your react native apps"
		>
			<header className={clsx('hero  ', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>

					<p className="hero__subtitle">{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link
							className={clsx(
								'button button--primary button--lg',
								styles.getStarted
							)}
							to={useBaseUrl('docs/')}
						>
							Get Started
						</Link>
						<Link
							style={{ marginLeft: 10 }}
							className={clsx(
								'button button--outline button--primary button--lg',
								styles.getStarted
							)}
							to="https://expo.io/@kidingki/projects/react-native-rapi-ui-showcase"
						>
							Demo
						</Link>
					</div>
				</div>
			</header>
			<main>
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}

export default Home;
