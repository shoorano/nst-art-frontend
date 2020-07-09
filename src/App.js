import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import DisplayNST from './Components/DisplayNST/DisplayNST.js';
import SignIn from './Components/SignIn/SignIn.js';
import Register from './Components/Register/Register.js'
import './App.css';

const particlesParams = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 900
        }
      },
      line_linked: {
        shadow: {
          enable: true,
          color: "pink",
          blur: 5
      }
    }
  }
}
const initialState = {
  input1: '',
  input2: '',
  link: '',
  route: 'signin',
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  runNST = (async function(img, style) {
    try {
      const result = await fetch('https://shrouded-mesa-77753.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          img: img,
          style: style
        })
      })
      const url = await result.json();
      this.setState({link: url});
      if (url !== 'API not reachable.') {
          fetch('https://shrouded-mesa-77753.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count}))
        })
      } else {
            throw Error;
          }
        }
        catch {
            alert("Please check your url's are valid.");
          }
      })

  onInput1Change = (event) => {
    this.setState({input1: event.target.value});
  }

  onInput2Change = (event) => {
    this.setState({input2: event.target.value});
  }

  onImageSubmit = (event) => {
    this.runNST(this.state.input1, this.state.input2);
  }

  onRouteChange = (Route) => {
    if (this.state.route === 'home') {
      this.setState(initialState);
    }
    this.setState({route: Route});
  }

  isSignedIn = () => {
    return this.state.route;
  }

  render() {
   const { route } = this.state;
   return (
    <div className="App">
      <Particles
        className='particles'
        params={particlesParams}
      />
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.isSignedIn} />
      { route === 'signin'
        ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        : ( route === 'home'
           ? <div>
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries} />
              <ImageLinkForm
                name={'Submit'}
                description={`Insert an image url into the content and style inputs.
                               Then witness the power of AI's neural style transfer as
                               it reimagines your content in the style of your
                               favourite artist.`}
                onInputChange1={this.onInput1Change}
                onInputChange2={this.onInput2Change}
                onSubmit={this.onImageSubmit}
              />
              <DisplayNST link={this.state.link}/>
            </div>
           : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
         )
      }
    </div>
  )}
}

export default App;
