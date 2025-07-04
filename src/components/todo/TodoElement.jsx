import { useDispatch } from "react-redux";
import { updateTodoStatus, removeTodo, setCurrentTodo } from "../../redux/stackTodosSlice/stackTodosSlice";


export default function TodoElement({ elementTodo }) {
  const dispatch = useDispatch();

  return (<li
    is-complete={elementTodo.isComplete.toString()}
    className={elementTodo.isComplete ? "complete-li" : "active-li"}
  >
    <div className='list-div'>
      <label className='custom-container'>
        <input
          type='checkbox'
          checked={elementTodo.isComplete}
          onChange={() => dispatch(updateTodoStatus(elementTodo.id))}
        />
        <span className='custom-checkmark'></span>
      </label>
      <span
        onDoubleClick={(event) => {
          dispatch(setCurrentTodo({id: elementTodo.id, value: event.target?.innerText}));
        }}
      >
        {elementTodo.value}
      </span>
      <button onClick={() => dispatch(removeTodo(elementTodo.id))}>Удалить</button>
      <div className='hidden-div'></div>
    </div>
  </li>
  )
}
