import React from "react";
import styles from "./TaskColumn.module.css";



import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import {
  FaCheckCircle,
  FaRegCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import {
  MdOutlineIncompleteCircle,
  MdCancel,
  MdBatteryChargingFull,
} from "react-icons/md";
import {
  FcHighPriority,
  FcLowBattery,
  FcMediumPriority,
  FcHighBattery,
} from "react-icons/fc";
import AvatarWithStatus from "../Card/Avatar/UserAvatar.jsx";
import FeatureRequestCard from "../Card/TicketCard.js";

const icons = {
  Done: <FaCheckCircle color="green" />,
  "In progress": <MdOutlineIncompleteCircle color="yellow" />,
  Canceled: <MdCancel />,
  Todo: <FaRegCircle />,
  Backlog: <FaExclamationCircle color="red" />,
  "No priority": <FcHighPriority />,
  Low: <FcLowBattery />,
  Medium: <FcMediumPriority />,
  High: <FcHighBattery />,
  Urgent: <MdBatteryChargingFull color="green" />,
};

const TaskColumn = ({ title, tickets, ordering, grouping }) => {
  return (
    <div className={styles.column}>
      <div className={styles.leftview}>
        <div className="dot">
          {grouping !== undefined && grouping === "user" ? (
            <AvatarWithStatus statusColor={"green"} grouping={grouping} indashBoard={grouping === "user"} />
          ) : (
            icons[title]
          )}
        </div>
        <div className={styles.name_label}>
          <h5>{title}</h5>
          <h5 className="heading">{tickets.length}</h5>
        </div>
        <div>
          <GoPlus />
          <BsThreeDots />
        </div>
      </div>

      <div className={styles.card_container}>
        {tickets !== undefined &&
          tickets.map((ticket, i) => {
            return (
              <FeatureRequestCard
                key={i}
                id={ticket.id}
                tag={ticket.tag.join("")}
                title={ticket.title}
                grouping={grouping}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TaskColumn;
