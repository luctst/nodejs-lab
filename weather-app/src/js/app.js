/**
 * Import
 */
import Form from "./view/form";
import React from "react";
import { render } from "react-dom";

/**
 * Variables
 */
const app = document.querySelector("#app");

/**
 * Déclaration
 */
class App extends React.Component {
    render() {
        return (
            <Form></Form>
        );
    }
};

/**
 * Exécution
 */
render(<App></App>, app);