export const getContact = state => state.todos.items;
export const getFilter = state => state.todos.filter;

export const getVisibleTodos = state => {
  const contacts = getContact(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};