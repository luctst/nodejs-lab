/**
 * Import
 */
import Form from "./view/form";
import React from "react";
import { render as _render } from "react-dom";

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
_render(<App></App>, app);