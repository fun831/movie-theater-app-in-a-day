import React, { Component } from 'react';
import NavBar from './navBar';
import MoviePoster from './moviePoster';
import Description from './description';
import Picker from './picker';

import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import ShowTimes from './showTimes';

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className='app'>
        <NavBar/>
        <div className="page__container">
          <MoviePoster/>
          <Description/>
          <div className="showing-container">
            <Picker startDate={this.state.startDate} callBack={(date) => this.handleChange(date)}/>
            <ShowTimes/>
            <button>Select Seats</button>
          </div>
        </div>
      </div>
    );
  }
}
