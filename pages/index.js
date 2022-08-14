import Curso from '../components/Curso';
import Layout from '../components/Layout'
import Listado from '../components/Listado'

export default function Home({guitarras, curso}) {
  return (
    <Layout page="Inicio">
      <main className='contenedor'>
        <h1 className="heading">Nuestra Colección</h1>
        <Listado guitarras={guitarras}/>
      </main>
      <Curso curso={curso.data.attributes}/>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen&sort=createdAt%3Adesc`;
  const urlCursos = `${process.env.API_URL}/curso?populate=*`;

  const [resGuitarras, resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos)
  ]);

  const [guitarras, cursos] = await Promise.all([
    resGuitarras.json(),
    resCursos.json()
  ]);

  return {
      props:{
          guitarras: guitarras,
          curso: cursos
      }
  }
}