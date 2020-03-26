import React from "react";
import "./App.scss";

let restName = "Indigo";
let description =
  "Located in the hotel lobby, our newly restaurant offers a large variety of Asian cuisine and is associated with perfect taste and extraordinary dishes. For this restaurant with this cool name it is not only the menu that offers the perfect taste, but the bar is something unique, complementing the food in the best way possible. In addition to the Asian spirits and the famous sake,  there is large selection of top-quality wines to choose from as well as a selection of Champaign and Prosecco. Designed to satisfy even the most exigent tastes in matter of food and drinks, the Ginger Sushi Bar & Lounge also impresses with its large open kitchen where the restaurant’s experienced Asian Chefs show their culinary talents in preparing the so healthy, nourishing and appetizing dishes.";

function App() {
  return (
    <div className="App">
      <Tab></Tab>
    </div>
  );
}

class Tab extends React.Component {
  render() {
    return (
      <div className="Tab">
        <Nav></Nav>
        <Content name={restName} text={description}></Content>
      </div>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <Btns name="Home"></Btns>
        <Btns name="Menu"></Btns>
        <Btns name="About"></Btns>
      </div>
    );
  }
}

class Btns extends React.Component {
  render() {
    return <button className="Button">{this.props.name}</button>;
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>{this.props.name}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default App;
