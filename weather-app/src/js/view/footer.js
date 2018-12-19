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
                <p className="small"><a href={props.link} target="_blank">Made by me :)</a></p>
            </div>
        </footer>
    );
};