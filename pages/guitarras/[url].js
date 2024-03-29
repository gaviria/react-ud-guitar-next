import Image from 'next/image'
import styles from '../../styles/Guitarra.module.css'
import Layout from '../../components/Layout'

const Producto = ({guitarra}) => {
console.log("🚀 ~ file: [url].js ~ line 5 ~ Producto ~ guitarra", guitarra.data[0].attributes)
    
    const { descripcion, imagen, nombre, precio } = guitarra.data[0].attributes;
    return (
        <Layout page={`Guitarra ${nombre}`}>
            <div className={styles.guitarra}>
                <Image layout='responsive' width={180} height={350} src={imagen.data.attributes.url} alt={`Imagen Guitarra ${nombre}`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>{precio}</p>

                    <form className={styles.formulario}>
                        <label>Cantidad:</label>
                        <select name="cantidad" id="cantidad">
                            <option value="">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                        <input type="submit" value="Agregar al Carrito" />
                    </form>
                </div>
            </div>
            </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}&populate=*`;

    const respuesta = await fetch(urlGuitarra);
    const guitarra = await respuesta.json();

    return {
        props: {
            guitarra: guitarra
        }
    }
}

export default Producto
