import Link from 'next/link'
import Layout from '../components/Layout'
import Listado from '../components/Listado';

export default function Tienda({guitarras}) {
    return (
        <Layout page="Tienda Virtual">
            <main className='contenedor'>
                <h1 className='heading'>
                    Nuestra Colección
                </h1>
                <Listado
                    guitarras={guitarras}
                />
            </main>
        </Layout>
    );
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitarras?populate=imagen&sort=createdAt%3Adesc`;
    const respuesta = await fetch(url);
    const guitarras = await respuesta.json();

    console.log(guitarras);

    return {
        props:{
            guitarras: guitarras
        }
    }
}
