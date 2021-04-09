import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }
  componentDidMount() {
    console.log("inside component Mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onsearchChange = (event) => {
    this.setState({ searchString: event.target.value });
  };

  render() {
    const { monsters, searchString } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search mosters"
          handleChangeEvent={this.onsearchChange}
        />
        <CardList key="cardlistkey" monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       string: "hello",
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{this.state.string}</p>
//           <button onClick={() => this.setState({ string: "Hello India" })}>
//             ChangeText
//           </button>
//         </header>
//       </div>
//     );
//   }
// }
