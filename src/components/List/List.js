import React from "react";
import styles from "./List.module.css"; // Import the CSS module
import { pages } from "@/data/pages";

const List = () => {
  return (
    <di className={styles.page}>
      <div className={styles.websiteListContainer}>
        <h1 className={styles.header}>Discover Tropical Paradise</h1>
        <div className={styles.websiteList}>
          {pages.map((page) => (
            <div className={styles.websiteCard} key={page.id}>
              <h2>{page.name}</h2>
              <a href={page.url} target="_blank" rel="noopener noreferrer">
                Visit page <span> {page.addy}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </di>
  );
};

export default List;
