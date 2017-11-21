import React, { Component } from 'react';


class CalendarPanel extends Component {

    constructor (props)
    {
        super();
        this.state = {
            ics2jsonFunction: process.env.REACT_APP_ICS2JSON_URL,
            timezone: {},
            events: []
        };
    }

    componentWillMount ()
    {
        var _this = this;
        var ics2JsonUrl = this.state.ics2jsonFunction +
            '?filter=' + this.props.filter +
            '&count=' + this.props.count +
            '&ics=' + this.props.icsUrl;

        fetch(ics2JsonUrl)
			.then(res => res.json())
			.then((out) => {
                let currentState = _this.state;
                currentState.timezone = out.timezone;
                currentState.events = out.events;
                _this.setState(currentState);
			})
			.catch(err => {
                throw err
            });
    }

    render ()
    {
        return (
            <div className={ this.props.className }>
                <div className="panel-heading">
                    <h3 className="panel-title">Upcoming Events</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Day</th>
                                    <th>Date &amp; Time</th>
                                    <th>Event</th>
                                </tr>
                                {this.state.events.map( (event) => (
                                    <tr key={event.startdate}>
                                        <td>{ (new Date(event.data.start.replace('Z',''))).toLocaleString(window.navigator.language, {weekday: 'long'}) }&nbsp;&nbsp;</td>
                                        <td>{ (new Date(event.data.start.replace('Z',''))).toLocaleString() }&nbsp;&nbsp;</td>
                                        <td><strong>{ event.data.summary }</strong></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default CalendarPanel;
