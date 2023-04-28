import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
	{
		title: 'Explore React Native',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				This is documentation for Colorado's "Coding for the Web" (CFTW) Meetup
				group which provides free coding classes for web development. This open
				source project is an introduction to React Native.
			</>
		),
	},
	{
		title: 'Project Summary',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				Develop a cross platform application for IOS and Android mobile devices
				using Expo React Native. GraphQL will be used to pull-in crypto currency market data. App will be password protected using Amazon AWS infrastructure.

			</>
		),
	},
	{
		title: 'About the Docs',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				Docusaurus is being used for both investigation of capabilities as well
				as exploring an alternate method for creating tutorial content.
				Code at Github.com/ravenOSS/rn-crypto-docs.
			</>
		),
	},
]

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<Svg className={styles.featureSvg} role='img' />
			</div>
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
