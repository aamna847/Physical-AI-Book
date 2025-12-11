import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

function Card({ title, description, icon, href, delay = 0 }) {
  return (
    <motion.div
      className={clsx('card', 'padding--lg')}
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3, delay: delay }}
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {icon && (
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {icon}
        </div>
      )}
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p className="text--left">{description}</p>
      {href && (
        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
          <a href={href} className="button button--primary">
            Learn More
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default Card;