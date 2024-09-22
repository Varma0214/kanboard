import React from 'react';
import Column from '../TaskColumn/TaskColumn'; 
import styles from './Kanboard.module.css'; 



const Board = ({ gridData, ordering, grouping }) => {
  const listOfKeys = Object.keys(gridData);
  
  return (
    <div className={styles.board}>
      {listOfKeys.map((key, i) => (
        <Column key={i} title={key} tickets={gridData[key]} ordering={ordering} grouping={grouping} />
      ))}
    </div>
  );
};

export default Board;
