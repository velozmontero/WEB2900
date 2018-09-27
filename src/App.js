import React, { Component } from 'react';
import DisplayNameAndAge from './components/DisplayNameAndAge';
import logo from './logo.svg';
import './App.css';

const styles = {
  textContainer: {
    margin: '50px'
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: ''
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('get derived state from props', props, state);
    console.log('  ');
    return null;
  }

  componentDidMount() {
    console.log('component did mount');
    console.log('  ');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update');
    console.log('  ');
    return this.state.name !== nextState.name || this.state.age !== nextState.age;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('get snapshot brfore update');
    console.log('  ');
    return 'some snapshot';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update with snapshot', snapshot);
    console.log('  ');
  }

  componentWillUnmount() {
    console.log('component will unmount');
    console.log('  ');
  }

  componentDidCatch(error, info) {
    console.log('catching error ', error.message);
    console.log('  ');
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  onAgeChange(event) {
    this.setState({
      age: event.target.value.replace(/\D/g, ''),
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <DisplayNameAndAge name={this.state.name} age={this.state.age} />

        <div style={styles.inputsContainer}>
          <input 
            onChange={this.onNameChange} 
            value={this.state.name} 
            type="text" 
          />

          <input 
            onChange={this.onAgeChange} 
            value={this.state.age} 
            type="text" 
          />
        </div>
      </div>
    );
  }
}

export default App;