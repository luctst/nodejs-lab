/**
 * Import
 */
import React from "react";

/**
 * Déclaration
 */
export const Header = props => {
    return (
        <header className="row">
            <h1 className="text-center">{props.title}</h1>
        </header>  
    );
};