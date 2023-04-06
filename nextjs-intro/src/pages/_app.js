import NavBar from '@/components/NavBar';

// blueprint
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: #333;
        }
      `}</style>
    </>
  );
}
