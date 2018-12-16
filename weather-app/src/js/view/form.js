/**
 * Import
 */
import React from "react";
 
/**
 * Déclaration
 */
export default class Form extends React.Component {
    state = {
        showData: false,
        weatherData: {},
    }
    displayData = () => {
        let button = this.state.showData;
        this.setState({
            showData: !button
        });
    }
    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bordeaux&units=metric&APPID=26e8fc76ea4289676e61e4f91583579d`)
            .then(response => response.json())
            .then(data => this.setState({ weatherData: data }))
            .catch(error => error);
    }
    render() {
        return (
            <section className="row" style={{margin:"10% 0"}}>
                <form action="/" method="POST">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your city" name="city"></input>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-warning" value="Get weather" onClick={this.displayData} ></input>
                        <input type="submit" className="btn btn-primary" value="get more info" style={{ marginLeft: "10px" }}></input>
                    </div>
                </form>
                {
                    this.state.showData ?
                        <p>{this.state.weatherData.name}</p>
                    : null
                }
            </section>
        );
    }
};