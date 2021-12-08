import '../styles/globals.css'
import Head from 'next/head'
import { MantineProvider, Button, AppShell } from '@mantine/core'
import { i18n } from '../services/dataservice'
import { pink } from '@mantine/styles'

export default function Charcuterie({ Component, pageProps }) {
	return <>
		<Head>
			<title>{i18n.appTitle}</title>
		</Head>
		<MantineProvider
			theme={{
				// Override any other properties from default theme
				fontFamily: 'Open Sans, sans serif',
				primaryColor: 'red'
			}}
		>
			<AppShell style={{ backgroundImage: 'url("/backgrounds/Melamine-wood-005.png")', width: "100%", height: "100%", position: "absolute" }}>
				<Component {...pageProps} />

			</AppShell>
		</MantineProvider>
	</>
}

