import React from 'react';
import styles from './footer.module.css';

export const Footer = ({ Completedtasks, Pendingtasks }) => {
  return (
    <div className={styles.footer}>
      <h5>Completed Tasks: {Completedtasks}</h5>
      <h5>Pending Tasks: {Pendingtasks}</h5>
    </div>
  );
};
