import React, { Component } from 'react'
import Cards from './Cards'


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }


  }

  componentDidMount() {
    // initial data fetch() calls here
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => this.setState({ users: data.results }))
      .catch(err => console.error(err));
    debugger;

  }
  updateUser = () => {
    var obj;
    var updatedUser;
    const temp = this.state.users.slice();
    debugger;
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => obj = data.results)
      .then((obj) => {
        updatedUser = temp.concat(obj)
        this.setState({ users: updatedUser })
      })

  };
  render() {
    console.log(this.state.users);
    return (
      <div className="grid-container" >
        <header>

          <a href="/">My React App</a>


        </header>

        <main>
          <button onClick={this.updateUser}>Fetch Cards</button>
          <div className="content">
            <div className="main">

              <Cards users={this.state.users} />
            </div>
          </div>
        </main>
        <footer>

          All Rights Reserved

      </footer>

      </div>
    );
  }
}

export default App;
