export const loadGrid = (tickets, grouping, ordering,users) => {
  let orderedTickets;
  if (ordering === "priority") orderedTickets = orderByPriority(tickets);
  else orderedTickets = orderByTitle(tickets);

  switch (grouping) {
    case "status":
      return groupTicketsByStatus(orderedTickets);
    case "priority":
      return groupTicketsByPriority(orderedTickets);
     case "user": return userMapGenerator(users,orderedTickets);
    default:  return userMapGenerator(users,orderedTickets);
  }
};

const groupTicketsByStatus = (tickets) => {
  const groups = tickets.reduce(
    (map, obj) => {
      if (!map[obj.status]) {
        map[obj.status] = [];
      }
      map[obj.status].push(obj);
      return map;
    },
    { Backlog: [], Todo: [], "In progress": [], Done: [], Canceled: [] }
  );

  return groups;
};

export const userMapGenerator = (users, tickets) => {
  let map = {};

  users.forEach((user) => {
    if (!map[user.name]) {
      map[user.name] = [];
    }

    for (let index = 0; index < tickets.length; index++) {
      if (tickets[index].userId === user.id) {
        map[user.name].push(tickets[index]);
      }
    }
  });

  return map;
};

const groupTicketsByUserId = (tickets) => {
  const groups = tickets.reduce(
    (map, obj) => {
      if (!map[obj.id]) {
        map[obj.id] = [];
      }
      map[obj.id].push(obj);
      return map;
    },
    { Backlog: [], Todo: [], "In progress": [], Done: [], Canceled: [] }
  );
  return groups;
};

const groupTicketsByPriority = (tickets) => {
  const groups = tickets.reduce(
    (map, obj) => {
      const priority = getPriotityLabel(obj.priority);
      if (!map[priority]) {
        map[priority] = [];
      }
      map[priority].push(obj);
      return map;
    },
    { "No priority": [], Low: [], Medium: [], High: [], Urgent: [] }
  );
  return groups;
};

const getPriotityLabel = (priority) => {
  switch (priority) {
    case 0:
      return "No priority";
    case 1:
      return "Low";
    case 2:
      return "Medium";
    case 3:
      return "High";
    case 4:
      return "Urgent";
    default:
      return "NA";
  }
};

const orderByPriority = (tickets) =>
  tickets.sort((a, b) => (a.priority > b.priority ? -1 : 1));
const orderByTitle = (tickets) =>
  tickets.sort((a, b) => (a.title < b.title ? -1 : 1));