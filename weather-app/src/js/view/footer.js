/**
 * Import
 */
import React from "react";

/**
 * Déclaration
 */
export const Footer = props => {
    return (
        <footer className="row">
            <div className="col-12">
                <p className="small text-center"><a href={props.link} target="_blank">This is me !!</a></p>
            </div>
        </footer>
    );
};