import { Routes, Route, Link } from "react-router-dom";
function About() {
return (
    <>
    <main>
        <h2>Who are we?</h2>
        <p>
        That feels like an existential question, don't you
        think?
        </p>
    </main>
    <nav>
        <a href='/'>Home a</a>
        <br/>
        <Link to="/">Home</Link>
    </nav>
    </>
);
}

export default About