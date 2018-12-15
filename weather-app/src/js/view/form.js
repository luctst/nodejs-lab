/**
 * Import
 */
import React from "react";
 
/**
 * Déclaration
 */
export default class Form extends React.Component {
    render() {
        return (
            <section className="row" style={{margin:"10% 0"}}>
                <form action="/" method="POST">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your city" name="city"></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="get weather"></input>
                    </div>
                </form>
            </section>
        );
    }
};