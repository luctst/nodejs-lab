/**
 * Import
 */
import { Form } from "./view/form";
import { Footer } from "./view/footer";
import { Header } from "./view/header";
import React from "react";
import { render } from "react-dom";

/**
 * Variables
 */
const app = document.querySelector("#app");
const footerLink = "https://www.github.com/luctst";

/**
 * Déclaration
 */
class App extends React.Component {
    render() {
        return (
            <>
                <Header title="Get weather"></Header>
                <Form></Form>
                <Footer link={footerLink}></Footer>
            </>
        );
    }
};

/**
 * Exécution
 */
render(<App></App>, app);