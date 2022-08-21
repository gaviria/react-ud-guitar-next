import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../styles/Header.module.css";

const Header = ({ guitarra }) => {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.barra}>
                    <Link href="/">
                        <a>
                            <Image
                                width={400}
                                height={100}
                                src="/img/logo.svg"
                                alt="logo"
                            />
                        </a>
                    </Link>
                    <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                    </nav>
                </div>
                {guitarra && (
                    <div className={styles.modelo}>
                        <h2>Modelo {guitarra.attributes.nombre}</h2>
                        <p>Descripción: {guitarra.attributes.descripcion}</p>
                        <p className={styles.precio}>
                            Precio: ${guitarra.attributes.precio}
                        </p>
                        <Link href={`/guitarras/${guitarra.attributes.url}`}>
                            <a className={styles.enlace}>Ver Producto</a>
                        </Link>
                    </div>
                )}
            </div>
            {router.pathname === "/" && (
                <div className={styles.guitarra}>
                    <Image
                        layout="fixed"
                        width={500}
                        height={1200}
                        src="/img/header_guitarra.png"
                        alt="imagen header guitarra"
                    />
                </div>
            )}
        </header>
    );
};

export default Header;
