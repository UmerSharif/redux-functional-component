import React, { useRef } from "react";
import { connect } from "react-redux";

const Counter = ({ count, onIncrement, formData, onAdd }) => {
  const inputEl = useRef(null);
  const onSubmit = e => {
    e.preventDefault();
    console.log(inputEl.current.value);
    onAdd(inputEl.current.value);
  };
  return (
    <div>
      <h2>Hi, I am a Counter</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement} className="increment">
        Increment
      </button>
      <br />
      <form onSubmit={onSubmit}>
        <h2>Redux input</h2>
        <p>Data:{formData}</p>
        <input ref={inputEl} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("mapstateto props", state);
  return {
    count: state.count,
    formData: state.formData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onAdd: val => {
      const action = { type: "ADD", payload: val };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
