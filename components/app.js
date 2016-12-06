import React, {Component} from 'react'
import ReactDOM from 'react-dom'
let os = require( 'os' )

class App extends Component {

  constructor(props){
    super( props )
  }

  render(){
    return (
      <div>
        to many time, { os.homedir() }
      </div>
    );
  }

}

ReactDOM.render( <App />, document.getElementById('app') )