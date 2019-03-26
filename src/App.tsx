import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import DocIntro from './pages/DocIntro'
import DocIcon from './pages/DocIcon'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>Facebook UI</header>
          <div>
            <aside>
              <h2>Component</h2>
              <ul>
                <li><Link to="/icon">Icon</Link></li>
              </ul>
            </aside>
          </div>
          <main>
            <Route exact={true} path="/" component={DocIntro}/>
            <Route path="/icon" component={DocIcon}/>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
