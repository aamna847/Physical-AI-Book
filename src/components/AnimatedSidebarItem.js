import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from '@docusaurus/Link';

function AnimatedSidebarItem({ item, level = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    if (item.items && item.items.length > 0) {
      // Check if this section is currently active based on URL
      const currentPath = window.location.pathname;
      const isActive = item.items.some(subItem => 
        currentPath.includes(subItem.href || subItem.docId || '')
      );
      setIsExpanded(isActive);
    }
  }, [item]);

  if (!item) return null;

  const hasChildren = item.items && item.items.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: level * 0.1 }}
      style={{ 
        paddingLeft: level > 0 ? '1rem' : '0',
        marginBottom: '0.5rem'
      }}
    >
      {hasChildren ? (
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: 'none',
              border: 'none',
              width: '100%',
              textAlign: 'left',
              padding: '0.5rem 0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: 'currentColor'
            }}
          >
            <span>{item.label}</span>
            <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              ▼
            </span>
          </button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.items.map((subItem, index) => (
                  <AnimatedSidebarItem 
                    key={subItem.href || subItem.docId || index} 
                    item={subItem} 
                    level={level + 1} 
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          to={item.href || item.docId}
          style={{
            display: 'block',
            padding: '0.5rem 0',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          {item.label}
        </Link>
      )}
    </motion.div>
  );
}

export default AnimatedSidebarItem;