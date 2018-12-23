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
            <p className="small" style={{textAlign:"center"}}><a href={props.link} target="_blank">Made by me :)</a></p>
        </footer>
    );
};