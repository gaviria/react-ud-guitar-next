import Layout from "../../components/Layout";
import Image from 'next/image';
import { formatearFecha } from "../../helpers/formatearFecha";
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({ entrada }) => {

    const { contenido, imagen, publishedAt, titulo } = entrada.data[0].attributes;

    return (
        <Layout>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image priority="true" layout='responsive' width={800} height={600} src={imagen.data.attributes.url} alt={`Imagen entrada ${titulo}`} />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();

    const paths = entradas.data.map( entrada => ({
        params: { url: entrada.attributes.url }
    }));

    return {
            paths,
            fallback: false
        }

}

export async function getStaticProps(query) {
    const {params:{url}} = query;

    const urlBlog = `${process.env.API_URL}/blogs?populate=*&filters[url][$eq]=${url}`;
    const respuesta = await fetch(urlBlog);
    const entrada = await respuesta.json();

    return {
        props: {
            entrada: entrada
        }
    }
}

// export async function getServerSideProps({query: { id }}) {

//     const url = `${process.env.API_URL}/blogs/${id}?populate=*`;

//     const respuesta = await fetch(url);
//     const entrada = await respuesta.json();

//     return {
//         props: {
//             entrada: entrada
//         }
//     }
// }

export default EntradaBlog;
