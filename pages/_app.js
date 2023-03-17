import '../styles/globals.css';
import Layout from '../components/Layout';
import LayoutIndex from '../components/LayoutIndex';

export default function App({ Component, pageProps }) {
	if (Component.getLayout) {
		return Component.getLayout(
			<LayoutIndex>
				<Component {...pageProps} />
			</LayoutIndex>,
		);
	}

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
