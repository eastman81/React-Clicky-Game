import React, { Component } from "react";
import CharaCard from "./components/CharaCards";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import charas from "./charas.json";
import "./App.css";

class App extends Component {
  // Setting this.state.charas to the charas json array
  state = {
    charas
  };

  // Shuffle
  removeChara = (charas) => {
    charas = this.state.charas.sort(function() { return 0.5 - Math.random() });
    this.setState({ charas });
  }

  // Map over this.state.charas and render a FriendCard component for each chara object
  render() {
    return (
      <Wrapper>
        <Nav>
        </Nav>
        {this.state.charas.map(chara => (
          <CharaCard
            removeChara={this.removeChara}
            id={chara.id}
            key={chara.id}
            name={chara.name}
            image={chara.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
