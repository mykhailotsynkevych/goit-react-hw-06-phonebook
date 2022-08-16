import { connect } from 'react-redux';
import contactsActions from '../../redux/todos/contacts-actions';
import ContactsList from './ContactsList';

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(contactsActions.deleteTodo(id)),
  onToggleCompleted: id => dispatch(contactsActions.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);