import React, {Component, Suspense} from 'react';
import Page1 from './Page1';
import './App.css';

const Component2 = React.lazy(() => import('./Page2'));
const Component3 = React.lazy(() => import('./Page3'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1'
    }
  }

  onRouteChange = (route) => {
    this.setState ({ route })
  }

  render() {

    if(this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange}/>
    } else if(this.state.route === 'page2') {
      
      return <Suspense fallback={<div>Loading...</div>} >
                <Component2 onRouteChange={this.onRouteChange}/>
              </Suspense>
    }else {
      
      return <Suspense fallback={<div>Loading...</div>}>
                <Component3 onRouteChange={this.onRouteChange}/>
              </Suspense>
    }
  }
}

export default App;
