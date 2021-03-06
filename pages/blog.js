import Layout from '../components/Layout';
import Entrada from '../components/Entrada';
import styles from '../styles/Blog.module.css';

export default function Blog({entradas}) {
    return (
        <Layout page="Blog">
            <main className="contenedor">
                <h2 className="heading">Blog</h2>
                <div className={styles.blog}>
                    {entradas.data.map(entrada => (
                        <Entrada
                            key={entrada.id}
                            entrada={entrada}
                        />
                    ))}
                </div>
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
