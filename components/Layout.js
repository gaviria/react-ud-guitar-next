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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;700;900&display=swap" rel="stylesheet" /> 
        </Head>
        <Header />
        {children}
        <Footer/>
    </>
  );
}

export default Layout