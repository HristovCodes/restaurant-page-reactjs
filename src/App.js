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
      tab: Home,
      title: <h1>Indigo</h1>,
      text: (
        <h2>
          Located in the hotel lobby, our restaurant offers a large variety of
          Japanese inspired cuisine and is associated with perfect taste and
          extraordinary dishes. For this restaurant with this cool name it is
          not only the menu that offers the perfect taste, but the bar is
          something unique, complementing the food in the best way possible. In
          addition to the Japanese spirits and the famous sake, there is large
          selection of top-quality wines to choose from as well as a selection
          of Champaign and Prosecco. Designed to satisfy even the most exigent
          tastes in matter of food and drinks, the
          <span> Indigo Sushi Restaurant </span>also impresses with its large
          open kitchen where the restaurant’s experienced Japanese Chefs show
          their culinary talents in preparing the so healthy, nourishing and
          appetizing dishes.
        </h2>
      )
    };
  }

  changeTabToHome() {
    this.setState({ tab: Home });
    this.setState({ title: <h1>Indigo</h1> });
    this.setState({
      text: (
        <h2>
          Located in the hotel lobby, our restaurant offers a large variety of
          Japanese inspired cuisine and is associated with perfect taste and
          extraordinary dishes. For this restaurant with this cool name it is
          not only the menu that offers the perfect taste, but the bar is
          something unique, complementing the food in the best way possible. In
          addition to the Japanese spirits and the famous sake, there is large
          selection of top-quality wines to choose from as well as a selection
          of Champaign and Prosecco. Designed to satisfy even the most exigent
          tastes in matter of food and drinks, the
          <span> Indigo Sushi Restaurant </span>also impresses with its large
          open kitchen where the restaurant’s experienced Japanese Chefs show
          their culinary talents in preparing the so healthy, nourishing and
          appetizing dishes.
        </h2>
      )
    });
  }

  changeTabToMenu() {
    this.setState({ tab: Menu });
    this.setState({ title: <h1>Menu</h1> });
    this.setState({
      text: (
        <div className="Display">
          <div className="Card">
            <img
              src="https://images.unsplash.com/photo-1554502078-ef0fc409efce?ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
              alt="Albacore with Crispy Onion"
            ></img>
            <h2>Albacore with Crispy Onion</h2>
            <p>$6.95</p>
          </div>
          <div className="Card">
            <img
              src="https://images.unsplash.com/photo-1558985212-92c2ff0b56e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="Takoyaki"
            ></img>
            <h2>Takoyaki</h2>
            <p>$5.95</p>
          </div>
          <div className="Card">
            <img
              src="https://images.unsplash.com/photo-1553701275-1d6118df60bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Edamame"
            ></img>
            <h2>Edamame</h2>
            <p>$3.95</p>
          </div>
          <div className="Card">
            <img
              src="https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="Shishito Pepper"
            ></img>
            <h2>Shishito Pepper</h2>
            <p>$6.95</p>
          </div>
        </div>
      )
    });
  }

  changeTabToAbout() {
    this.setState({ tab: About });
    this.setState({ title: <h1>It’s More Fun In Indigo!</h1> });
    this.setState({
      text: (
        <h2>
          Lively music, a vibrant crowd, inventive cocktails and the best sushi
          this side of California. You know when you’re in <span> Indigo </span>
          because there’s no other place like it. Order up the best sushi in
          town and delight in our signature rolls or amazing Japanese inspired
          cuisine. Whatever you choose, it’s all served with a big side of
          Anything Can Happen. So bring your friends or make new ones. Either
          way, you’re in for a great time.
        </h2>
      )
    });
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
        {this.props.title}
        {this.props.text}
      </div>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        {this.props.title}
        {this.props.text}
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="About">
        {this.props.title}
        {this.props.text}
      </div>
    );
  }
}

export default App;
