import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addActiveTodo,
  removeActiveTodo,
  addCompletedTodo,
  removeCompletedTodo,
} from "../redux/action";

function UIJSX({
  active,
  completed,
  addActiveTodo,
  removeActiveTodo,
  addCompletedTodo,
  removeCompletedTodo,
}) {
  const [text, setText] = useState("");
  const [stateAll, setStateAll] = useState(false);
  const [stateActive, setStateActive] = useState(false);
  const [stateCompleted, setStateCompleted] = useState(false);
  const handleChange = (event) => setText(event.target.value);
  const submitTodo = () => {
    setText("");
    addActiveTodo(text);
  };
  const makeCompleted = (todo) => {
    removeActiveTodo(todo);
    addCompletedTodo(todo);
  };
  const makeActive = (todo) => {
    removeCompletedTodo(todo);
    addActiveTodo(todo);
  };
  const deleteActive = (todo) => {
    removeActiveTodo(todo);
  };
  const deleteCompleted = (todo) => {
    removeCompletedTodo(todo);
  };
  console.log("State", active, completed);

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter TODO here..."
        onChange={handleChange}
      />
      <button onClick={submitTodo}> Add Todo </button>
      <br />
      <button
        onClick={() => {
          setStateAll(!stateAll);
          setStateActive(false);
          setStateCompleted(false);
        }}
      >
        Show All
      </button>
      <button
        onClick={() => {
          setStateActive(!stateActive);
          setStateAll(false);
          setStateCompleted(false);
        }}
      >
        Show Active
      </button>
      <button
        onClick={() => {
          setStateCompleted(!stateCompleted);
          setStateActive(false);
          setStateAll(false);
        }}
      >
        Show Completed
      </button>
      <br />
      {stateAll ? (
        <div>
          All Todos
          <ul>
            {active && completed
              ? [...active, ...completed].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))
              : active
              ? active.map((item, idx) => <li key={idx}>{item}</li>)
              : completed
              ? completed.map((item, idx) => <li key={idx}>{item}</li>)
              : null}
          </ul>
        </div>
      ) : null}
      <br />
      {stateActive ? (
        <div>
          Active Todos
          <ul>
            {active
              ? active.map((item, idx) => (
                  <li key={idx}>
                    {item} -{" "}
                    <button onClick={() => makeCompleted(item)}>
                      Mark Completed
                    </button>
                    <button
                      onClick={() => {
                        deleteActive(item);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                ))
              : null}
          </ul>
        </div>
      ) : null}
      <br />
      {stateCompleted ? (
        <div>
          Completed Todos
          <ul>
            {completed
              ? completed.map((item, idx) => (
                  <li key={idx}>
                    {item} -{" "}
                    <button onClick={() => makeActive(item)}>
                      Mark Active
                    </button>
                    <button
                      onClick={() => {
                        deleteCompleted(item);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                ))
              : null}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    active: state.active,
    completed: state.completed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addActiveTodo: (todo) => dispatch(addActiveTodo(todo)),
    removeActiveTodo: (todo) => dispatch(removeActiveTodo(todo)),
    addCompletedTodo: (todo) => dispatch(addCompletedTodo(todo)),
    removeCompletedTodo: (todo) => dispatch(removeCompletedTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UIJSX);
