import Layout from "@/components/_layout";
import "@/styles/globals.css";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
        <Layout>
            <Head>
                <title>Classic Timers</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
        </>
      );
}
