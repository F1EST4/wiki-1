  
import React, { useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Aprašymai',
    imageUrl: 'img/renders/franklin.png',
    linksTo: 'docs/',
    description: (
      <>
        Išsamūs serverio sistemų aprašymai su vaizdais iš serverio.
      </>
    ),
  },
  {
    title: 'Gidai',
    imageUrl: 'img/renders/michael.png',
    linksTo: 'blog/',
    description: (
      <>
        Oficialūs ir bendruomenės narių parašyti gidai, skirti pradedantiesiems žaidėjams ir ne tik.
      </>
    ),
  },
  {
    title: 'Paslaugos',
    imageUrl: 'img/renders/trevor.png',
    linksTo: 'docs/',
    description: (
      <>
        Visi projekto pirkiniai ir jų įkainiai. Sužinok ką žaidėjas gali įsigyti serveryje ir kas bus suteikiama.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, linksTo}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Link
      className={styles.feature}
      to={linksTo}
    >
      {imgUrl && (
        <img className={styles.featureImage} src={imgUrl} alt={title} />
        )}
      <div className={styles.featureText}>
        <h3>{title}</h3>
        <p>{description}</p>
        <i className={styles.arrowRight}></i>
      </div>
    </Link>
  );
}

function BackgroundVideo() {
  const videoRef = useRef();
  const setSpeed = () => {
    videoRef.current.playbackRate = 1.0;
  }

  return (
    <video 
      ref={videoRef}
      autoPlay
      loop
      muted
      onCanPlay={() => setSpeed()}
    >
      <source src='http://45.81.252.96/video.mp4' type='video/mp4'/>
    </video>
  );
};

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="RealState projekto Wiki dokumentacijos saugykla"
    >
      <div className={styles.indexRoot}>
        <div className={styles.videoBackground}>
          <BackgroundVideo />
        </div>
        <main>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.headline}>
                <h5>Sveiki atvykę į</h5>
                <h1>{siteConfig.title}!</h1>
              </div>
              {features && features.length > 0 && (
                <section className={styles.features}>
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </section>
              )}
            </div>
          </div>
        </main>
      </div>
  
    </Layout>
  );
}

export default Home;