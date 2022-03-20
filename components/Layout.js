import Head from 'next/head'
import Footer from './Footer';
import Header from './Header'

const Layout = ({ children, page }) => {
  return (
    <>
        <Head>
            <title>Guitar LA - {page}</title>
            <meta name="description" content="Sitio web de ventas de guitarra" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {children}
        <Footer/>
    </>
  );
}

export default Layout