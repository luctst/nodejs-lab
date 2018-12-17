/**
 * Import
 */
import React from "react";
 
/**
 * Déclaration
 */
export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            showData: false,
            weatherData: {},
        }
    }
    displayData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&units=metric&APPID=26e8fc76ea4289676e61e4f91583579d`)
            .then(response => response.json()
                .then(data => {
                    this.setState({ weatherData: data });
                }));
        let button = this.state.showData;
        this.setState({
            showData: !button,
        });
    }
    getQuery = event => {
        this.setState({
            query: event.target.value
        });
    }
    render() {
        return (
            <section className="row" style={{margin:"10% 0"}}>
                <form action="/weather.html" method="POST">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your city" name="city" onChange={this.getQuery}></input>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-warning" value="Get weather" onClick={this.displayData}></input>
                        <input type="submit" className="btn btn-primary" value="get more info" style={{ marginLeft: "10px" }}></input>
                    </div>
                </form>
                {
                    this.state.showData ?
                        <div>
                            <h3>Weather in {this.state.weatherData.name} :</h3>
                            {/* <ul className="list-group">
                                <li className="list-group-item">The temperature is about {this.state.weatherData.main.temp} degrees.</li>
                                <li className="list-group-item">The max temperature will be {this.state.weatherData.main.temp_max}</li>
                                <li className="list-group-item">The min temperature will be {this.state.weatherData.main.temp_min}</li>
                                <li className="list-group-item">The humidity will be of {this.state.weatherData.main.humidity} %</li>
                            </ul> */}
                        </div>
                    : null
                }
            </section>
        );
    }
};