import Layout from '@/components/Layout';
import '../styles/globals.css';

// blueprint
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        a {
          color: #333;
        }
      `}</style>
    </>
  );
}
