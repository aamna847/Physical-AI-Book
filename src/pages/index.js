import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import { motion } from 'framer-motion';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.header
      className={clsx('hero hero--primary', styles.heroBanner)}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="container">
        <motion.div variants={item}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
        </motion.div>
        <motion.div variants={item}>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </motion.div>
        <motion.div
          className={styles.buttons}
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            Read the Book - 5min ⏱️
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}

function Feature({ title, description }) {
  return (
    <motion.div
      className="col col--4"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <motion.div
              className="row"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Feature
                title="Physical AI"
                description="Bridging the gap between digital AI and the physical world."
              />
              <Feature
                title="Humanoid Robotics"
                description="Comprehensive guide to building humanoid robots with AI."
              />
              <Feature
                title="Practical Examples"
                description="Real-world implementation and best practices."
              />
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}