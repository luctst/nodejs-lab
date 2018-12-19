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
            query: null,
            showData: false,
            weatherData: {},
        }
    }
    displayData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&units=metric&APPID=26e8fc76ea4289676e61e4f91583579d`)
            .then(response => response.json()
            .then(data => this.setState({ weatherData: data, mainData: Object.values(data.main)})));
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
    render = () => {
        return (
            <section className="row" style={{margin:"5% 0 0"}}>
                <form action="/message" method="POST">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your city in english for now" name="city" onChange={this.getQuery}></input>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-warning" value="Get weather" onClick={this.displayData}></input>
                        <input type="submit" className="btn btn-primary" value="get more info" style={{ marginLeft: "10px" }}></input>
                    </div>
                </form>
                {
                    this.state.mainData ?
                        <div>
                            <h3>Weather in {this.state.weatherData.name} :</h3>
                            <ul className="list-group">
                                <li className="list-group-item">The temperature is about <strong>{this.state.weatherData.main.temp}</strong> degrees.</li>
                                <li className="list-group-item">The max temperature will be <strong>{this.state.weatherData.main.temp_max}</strong> degrees</li>
                                <li className="list-group-item">The min temperature will be <strong>{this.state.weatherData.main.temp_min}</strong> degrees</li>
                                <li className="list-group-item">The humidity will be of <strong>{this.state.weatherData.main.humidity}</strong> %</li>
                            </ul>
                        </div>
                    : null
                }
            </section>
        );
    }
};