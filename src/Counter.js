import React from "react";
import { connect } from "react-redux";

const Counter = ({ count }) => {
  return (
    <div>
      <p>Hi, I am a Counter</p>
      <p>Count: {count}</p>
      <button className="increment">Increment</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("mapstateto props", state);
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);
