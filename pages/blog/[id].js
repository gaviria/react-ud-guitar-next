const EntradaBlog = ({ entrada }) => {
    return (
        <div>
            <h1>EntradaBlog</h1>
        </div>
    )
}

export async function getStaticPaths() {
    const url = 'http://localhost:1337/api/blogs?populate=*';
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();
    console.log(entradas);
    const paths = entradas.data.map( entrada => ({
        params: { id: entrada.id.toString() }
    }));

    console.log(paths);

    return {
            paths,
            fallback: false
        }

}

export async function getStaticProps() {

    const url = 'http://localhost:1337/api/blogs?populate=*';
    const respuesta = await fetch(url);
    const entrada = await respuesta.json();

    return {
        props: {
            entrada: entrada
        }
    }
}

// export async function getServerSideProps({query: { id }}) {

//     const url = `http://localhost:1337/blogs/${id}`;

//     const respuesta = await fetch(url);
//     const entrada = await respuesta.json();

//     return {
//         props: {
//             entrada: entrada
//         }
//     }
// }

export default EntradaBlog;
