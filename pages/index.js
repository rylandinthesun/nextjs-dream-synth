import Head from 'next/head';
import Link from 'next/link';
import homeStyles from '../styles/Home.module.css';

export default function Home () {
	return (
		<div>
			<Head>
				<title>Web Synth By Ry</title>
			</Head>

			<h1 className={homeStyles.title}>Welcome to Dream Synth</h1>
			<div className={homeStyles.btnGroup}>
				<Link href="/synth">Let's Play</Link>
			</div>
		</div>
	);
}
