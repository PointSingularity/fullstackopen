import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};
const Part = (props) => {
  return (
    <p>
      {" "}
      {props.part} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  return (
    <React.Fragment>
      {props.parts.map((part, i) => (
        <Part key={i} part={part.name} exercise={part.exercises} />
      ))}
    </React.Fragment>
  );
};
const Total = (props) => {
  return <p>Number of excercises {props.total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  const total = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
