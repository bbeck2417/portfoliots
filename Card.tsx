// components/Card.tsx

import React from 'react';
import styles from './Card.module.css'; // We'll create this CSS module next

// Define the types for the props your Card component will accept
interface CardProps {
  title: string;
  description: string;
  // You could add more props like:
  // imageUrl?: string;
  // linkUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className={styles.card}> {/* Use the CSS module class */}
      {/* If you had an image prop */}
      {/* {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />} */}

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {/* If you had a link prop */}
      {/* {linkUrl && <a href={linkUrl} className={styles.link}>Learn More</a>} */}
    </div>
  );
};

export default Card;