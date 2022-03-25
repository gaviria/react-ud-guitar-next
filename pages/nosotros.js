import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

export default function Nosotros() {
  return (
      <Layout page="Nosotros">
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt="Nosotros" />
            <div>
              <p>
                Donec non mi magna. Praesent faucibus magna id tempus vulputate. Aenean varius quis tellus gravida cursus. Donec ornare felis eu lacinia varius. Sed dignissim, lacus nec suscipit consectetur, justo massa pretium diam, eu hendrerit arcu turpis nec ex. Nullam euismod lectus eros, non tincidunt diam tincidunt ac. Phasellus scelerisque ultricies tortor, vel hendrerit enim maximus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum placerat elit elit, et cursus felis tincidunt eget. In pretium interdum magna tempus consectetur. Donec aliquam auctor lorem, quis dapibus nibh vulputate non. Donec accumsan purus nulla, vitae venenatis nisl convallis et. 
              </p>
              <p>
                Donec non mi magna. Praesent faucibus magna id tempus vulputate. Aenean varius quis tellus gravida cursus. Donec ornare felis eu lacinia varius. Sed dignissim, lacus nec suscipit consectetur, justo massa pretium diam, eu hendrerit arcu turpis nec ex. Nullam euismod lectus eros, non tincidunt diam tincidunt ac. Phasellus scelerisque ultricies tortor, vel hendrerit enim maximus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum placerat elit elit, et cursus felis tincidunt eget. In pretium interdum magna tempus consectetur. Donec aliquam auctor lorem, quis dapibus nibh vulputate non. Donec accumsan purus nulla, vitae venenatis nisl convallis et. 
              </p>
            </div>
          </div>
        </main>
      </Layout>
  );
}
