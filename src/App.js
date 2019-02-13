import React, { Component } from 'react';
import './App.css';
import Classify from './components/classify';
import OpenFile from './components/open-file';
import ViewImage from './components/view-image';

export default class App extends Component{

  constructor(){
    super();
    this.setImage = this.setImage.bind(this);
    this.state = {
      image: null
    };
    this.classifier = window.ml5.imageClassifier('MobileNet', () => { console.log('model loaded.') });
  }

  setImage(image){
    this.setState({
      image
    });
  }

  render() {
    return (
      <div className="App">
        <main>
          <OpenFile imageSelected={this.setImage} />
          <ViewImage image={this.state.image} />
          <Classify image={this.state.image} classifier={this.classifier}/>
        </main>
      </div>
    );
  }
  
}