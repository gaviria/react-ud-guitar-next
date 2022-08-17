import Curso from "../components/Curso";
import Layout from "../components/Layout";
import Listado from "../components/Listado";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, curso, entradas }) {
  return (
    <Layout page="Inicio" guitarra={guitarras.data[3]}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso curso={curso.data.attributes} />
      <section className="contenedor">
        <ListadoBlog entradas={entradas} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen&sort=createdAt%3Adesc`;
  const urlCursos = `${process.env.API_URL}/curso?populate=*`;
  const urlBlog = `${process.env.API_URL}/blogs?populate=*&pagination[limit]=3&sort=createdAt%3Adesc`;

  const [resGuitarras, resCursos, resBolog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog),
  ]);

  const [guitarras, cursos, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBolog.json(),
  ]);

  return {
    props: {
      guitarras: guitarras,
      curso: cursos,
      entradas: entradas,
    },
  };
}
