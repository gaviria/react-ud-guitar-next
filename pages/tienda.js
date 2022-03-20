import Link from 'next/link'
import Layout from '../components/Layout'

export default function Tienda() {
    return (
        <Layout page="Tienda Virtual">
            <h1>Desde Tienda</h1>
            <Link href="/">Index</Link>
        </Layout>
    );
}
