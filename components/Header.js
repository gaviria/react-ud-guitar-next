import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = ({ guitarra }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image width={400} height={100} src="/img/logo.svg" alt="logo" />
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
          <div>
            <h1>Modelo {guitarra.attributes.nombre}</h1>
            <p>Descripción: {guitarra.attributes.descripcion}</p>
            <p>Precio: ${guitarra.attributes.precio}</p>
            <Link href={`/guitarras/${guitarra.attributes.url}`}>
              <a>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
