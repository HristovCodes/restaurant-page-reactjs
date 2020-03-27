import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Tab></Tab>
    </div>
  );
}

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.changeTabToHome = this.changeTabToHome.bind(this);
    this.changeTabToMenu = this.changeTabToMenu.bind(this);
    this.changeTabToAbout = this.changeTabToAbout.bind(this);
    this.state = {
      tab: Menu,
      title: "Menu",
      text: "Welcome to the best sushi store in town!"
    };
  }

  changeTabToHome() {
    this.setState({ tab: Home });
  }

  changeTabToMenu() {
    this.setState({ tab: Menu });
  }

  changeTabToAbout() {
    this.setState({ tab: About });
  }

  render() {
    return (
      <div className="Tab">
        <div className="Buttons">
          <Button onBtnPress={this.changeTabToHome} name="Home"></Button>
          <Button onBtnPress={this.changeTabToMenu} name="Menu"></Button>
          <Button onBtnPress={this.changeTabToAbout} name="About"></Button>
        </div>
        <Content
          tab={this.state.tab}
          title={this.state.title}
          text={this.state.text}
        ></Content>
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onBtnPress(e.target.value);
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.name}</button>;
  }
}

class Content extends React.Component {
  render() {
    return (
      <this.props.tab
        title={this.props.title}
        text={this.props.text}
      ></this.props.tab>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default App;
