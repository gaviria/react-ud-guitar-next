import { formatearFecha } from '../helpers/formatearFecha'
import styles from '../styles/Entrada.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Entrada = ({entrada}) => {
    const { id, attributes: { titulo, resumen, imagen, publishedAt, url }} = entrada;
    
    return (
        <article>
            <Image priority="true"
                layout='responsive'
                width={800}
                height={600}
                src={imagen.data.attributes.url}
                alt={`imagen blog ${titulo}`}
            />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>Leer Entrada</a>
                </Link>
            </div>
        </article>
    );
}

export default Entrada