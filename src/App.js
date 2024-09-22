import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback } from "react";

import NavBar from "./components/NavBar/NavBar"; // Updated name and path
import Kanboard from "./components/Kanboard/Kanboard"; // Updated name and path
import { loadGrid } from "./utilities/priority"; // Ensure this path is correct

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [gridData, setGridData] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");

  useEffect(() => {
    loadLocalPreferences();
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((data) => {
        const { tickets, users } = data;
        setTickets(tickets);
        setUsers(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSetGrouping = (groupBy) => {
    setGrouping(groupBy);
    saveLocalPreferences({ grouping: groupBy });
  };

  const handleSetOrdering = (orderBy) => {
    setOrdering(orderBy);
    saveLocalPreferences({ ordering: orderBy });
  };

  useEffect(() => {
    if (!tickets.length) return;
    setGridData(loadGrid(tickets, grouping, ordering, users));
  }, [grouping, ordering, tickets]);

  const saveLocalPreferences = useCallback((preferences) => {
    for (let key in preferences) {
      localStorage.setItem(key, preferences[key]);
    }
  }, []);

  const loadLocalPreferences = useCallback(() => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "priority");
  }, []);

  return (
    <div className="App">
      <NavBar
        setGrouping={handleSetGrouping}
        setOrdering={handleSetOrdering}
        ordering={ordering}
        grouping={grouping}
      />

      <div>
        <Kanboard gridData={gridData} ordering={ordering} grouping={grouping} />
      </div>
    </div>
  );
}

export default App;
