import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./DropdownMenu.module.css"; 

import { GiSettingsKnobs } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";

const DropdownMenu = ({ setGrouping, setOrdering, ordering, grouping }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const componentRef = useRef(null);

  const openDropdown = useCallback(() => {
    setModalOpen(true);
  }, []);

  const onClickOutSide = useCallback((event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", onClickOutSide);
    return () => {
      document.removeEventListener("click", onClickOutSide);
    };
  });

  const onGroupingChange = useCallback((e) => {
    setGrouping(e.target.value);
  }, []);

  const onOrderingChange = useCallback((e) => setOrdering(e.target.value), []);

  return (
    <div className={styles.display_dropdown} ref={componentRef}>
      <div
        className={styles.dropdown_label_container}
        onClick={openDropdown}
      >
        <GiSettingsKnobs style={{ transform: 'rotate(90deg)' }} />
        <div>Display</div>
        <FaChevronDown />
      </div>

      {isModalOpen && (
        <div className={styles.dropdown_content_container}>
          <div className={styles.dropdown_content_row}>
            <div className={styles.dropdown_content_label}>Grouping</div>
            <select
              name="grouping"
              id="grouping"
              value={grouping}
              onChange={onGroupingChange}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className={styles.dropdown_content_row}>
            <div className={styles.dropdown_content_label}>Ordering</div>
            <select
              name="ordering"
              id="ordering"
              value={ordering}
              onChange={onOrderingChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
