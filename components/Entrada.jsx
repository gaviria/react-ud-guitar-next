import React from 'react'
import { formatearFecha } from '../helpers/formatearFecha'
import Link from 'next/link'
import Image from 'next/image'

const Entrada = ({entrada}) => {
    const {titulo, resumen, imagen, publishedAt} = entrada.attributes;
    
    return (
        <article>
            <Image
                layout='responsive'
                width={800}
                height={600}
                src={imagen.data.attributes.url}
                alt={`imagen blog ${titulo}`}
            />
            <div>
                <h1>{titulo}</h1>
                <p>{formatearFecha(publishedAt)}</p>
                <p>{resumen}</p>
                <Link href={`/blog/{id}`}>
                    Leer Entrada
                </Link>
            </div>
        </article>
    );
}

export default Entrada