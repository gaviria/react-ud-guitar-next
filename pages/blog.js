import Link from 'next/link'
import Layout from '../components/Layout'

export default function Blog() {
    return (
        <Layout page="Blog">
            <h1>Desde Blog</h1>
            <Link href="/">Index</Link>
        </Layout>
    );
}
