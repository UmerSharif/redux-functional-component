import React from "react";
import { connect } from "react-redux";

const Counter = ({ count, onIncrement }) => {
  return (
    <div>
      <p>Hi, I am a Counter</p>
      <p>Count: {count}</p>
      <button onClick={onIncrement} className="increment">
        Increment
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("mapstateto props", state);
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      const action = { type: "INCREMENT" };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
