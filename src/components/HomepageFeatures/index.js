import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Philosophie',
    Svg: require('@site/static/img/philo2.svg').default,
    description: (
      <>
        Terminales A et B Tronc commun <br></br>
        Première Spécialité HLP 
      </>
    ),
  },
  {
    title: 'Cinéma',
    Svg: require('@site/static/img/cinema2.svg').default,
    description: (
      <>
        Première Spécialité CAV
      </>
    ),
  },
  {
    title: 'DGEMC',
    Svg: require('@site/static/img/droit.svg').default,
    description: (
      <>
        Terminale Option Droit et Grands Enjeux du Monde Contemporain
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
