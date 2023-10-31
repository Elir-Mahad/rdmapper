import React from "react";
import styles from "./List.module.css"; // Import the CSS module

const websites = [
  {
    id: 1,
    name: "Tropical Dreams Resort",
    url: "https://www.tropicaldreamsresort.com",
  },
  {
    id: 2,
    name: "Futuristic Oasis Retreattt",
    url: "https://www.futuristicoasis.com",
  },
  // Add more website objects as needed
];

const List = () => {
  return (
    <di className={styles.page}>
      <div className={styles.websiteListContainer}>
        <h1 className={styles.header}>Discover Tropical Paradise</h1>
        <div className={styles.websiteList}>
          {websites.map((website) => (
            <div className={styles.websiteCard} key={website.id}>
              <h2>{website.name}</h2>
              <a href={website.url} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </di>
  );
};

export default List;
