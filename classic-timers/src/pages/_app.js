import Layout from "@/components/_layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
      );
}
