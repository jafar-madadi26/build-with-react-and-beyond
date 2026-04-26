import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


function App() {
    return <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>;
}


function Header() {
    // const style = {color: "red", fontSize: "42px", textTransform: "uppercase"};
    const style = {};

    return (
        <h1 className="header">
            Fast React Pizza Co.
        </h1>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <Pizza/>
            <Pizza/>
            <Pizza/>
            <Pizza/>
        </main>
    )
}

function Pizza() {
    return (<div>
        <img src="pizzas/spinaci.jpg" alt='Pizza Spinaci'/>
        <h3>Pizza Spinaci</h3>
        <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>);
}



function Footer() {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour) alert("we're currently open!")
    // else alert("Sorry we're closed!");


    return (
        <footer className="footer">
            {new Date().toLocaleDateString()}. We're currently open
        </footer>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
