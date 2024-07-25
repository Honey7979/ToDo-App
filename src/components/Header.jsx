import React from 'react'
import styles from "./header.module.css"
import morningSticker from '../assets/images/morning.png';
import afternoonSticker from '../assets/images/afternoon.png';
import eveningSticker from '../assets/images/evening.png';


export const Header = () => {
  const getCurrentDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    return new Date().toLocaleDateString(undefined, options);
  }

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour<12) return "Good Morning";
    if (hour<18) return "Good Afternoon";
    return 'Good Evening';
  }

  const getSticker = () => {
    const hour = new Date().getHours();
    if (hour < 12) return morningSticker;
    if (hour < 18) return afternoonSticker;
    return eveningSticker;
  }

  return (
    <div className={styles.header}>
      <h5 className={styles.greetName}>{getGreeting()}</h5>
      <img src={getSticker()} alt="Greeting sticker" className={styles.sticker} />
      <p className={styles.heading}>To-Do</p>
      <h5 className={styles.date}>{getCurrentDate()}</h5>
    </div>
  );
  
}
