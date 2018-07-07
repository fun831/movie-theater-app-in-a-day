import React, { Component } from 'react';

class ShowTimes extends Component {
    render() {
        return (
            <div className="show-times__container">
                <button className="show-time">9:00 am</button>
                <button className="show-time">11:00 am</button>
                <button className="show-time">1:00 pm</button>
                <button className="show-time">3:00 pm</button>
                <button className="show-time">5:00 pm</button>
                <button className="show-time">7:00 pm</button>
                <button className="show-time">9:00 pm</button>
                <button className="show-time">11:00 pm</button>
            </div>
        );
    }
}
export default ShowTimes;