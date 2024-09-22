

import React from "react";
import styles from "./TicketCard.module.css";
import AvatarWithStatus from "./Avatar/UserAvatar";
const FeatureRequestCard = ({ id, title, tag,grouping }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.headerText}>{id}</span>
          <span className={styles.statusBubble}></span>
          <AvatarWithStatus statusColor={"blue"} grouping={grouping} indashBoard={grouping!=="user"}/>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <div  className={styles.inside}>
            <div className={styles.nafl}>    ...    </div>
            <div className={styles.dot}></div>
            <button className={styles.featureRequestButton}> {tag} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRequestCard;