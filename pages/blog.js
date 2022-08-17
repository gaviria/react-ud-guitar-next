import Layout from '../components/Layout';
import ListadoBlog from '../components/ListadoBlog';

export default function Blog({entradas}) {
    return (
        <Layout page="Blog">
            <main className="contenedor">
                <ListadoBlog 
                    entradas={entradas}
                />
            </main>
        </Layout>
    );
}

export async function getStaticProps() {

    const url = `${process.env.API_URL}/blogs?populate=*`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();

    return {
        props: {
            entradas: entradas
        }
    }
}
