import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Guitarra.module.css'

function Guitarra({guitarra}) {
    const {attributes: {nombre, descripcion, precio, url, imagen}} = guitarra;
    return (
        <div className={styles.guitarra}>
            <Image layout='responsive' width={180} height={350} src={imagen.data.attributes.url} alt={`Imagen Guitarra ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>{precio}</p>
                <Link href={`/guitarras/${url}`}><a className={styles.enlace}>Ver Producto</a></Link>
            </div>
        </div>
    )
}

export default Guitarra