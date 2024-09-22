import React from 'react'
import styles from './NavBar.module.css'; 
import DropDownModal from '../DropdownMenu/DropdownMenu'; 

const Header = ({setGrouping,setOrdering,grouping,ordering}) => {
  return (
    <div>
        <header className={styles.header}>
            <DropDownModal setGrouping={setGrouping} setOrdering={setOrdering} grouping={grouping} ordering={ordering}/>
            </header>
    </div>

    
  )
}

export default Header