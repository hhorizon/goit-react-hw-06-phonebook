const getItems = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getFilteredItems = (state) =>
  getItems(state).filter((contact) =>
    contact.name.toLowerCase().includes(getFilter(state).toLowerCase().trim())
  );

export { getItems, getFilter, getFilteredItems };
