import React from 'react';
import classes from './aboutus.module.css';

const AboutUs = () => {
    return (
        <section className={classes.aboutus}>
            <h1>About Me</h1>
            <p>I am Rahul Daksh, hails from city <b><em>Bareilly</em></b> in <b>Uttar Pradesh</b>. I did my schooling (10+2) from Army School
                Bareilly Cantt. After that I did B.Tech in <b>Electronics and Communication</b> from <b>ABES Engineering College, Ghaziabad</b>.
            </p>
            <p>I graduated in 2016. From then, till now I am working as a <b>Software Engineer-UI</b>. I explored and worked
                in ASP.NET, SQL Server, C#, HTML, e-books, API and many more. But I have expertise in following:
            </p>
            <div className={classes.imgWrap}>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3, SCSS</li>
                    <li>JavaScript</li>
                    <li>jQuery, AJAX</li>
                    <li>Bootstrap</li>
                    <li>WordPress</li>
                    <li>React</li>
                    <li>Redux</li>
                </ul>
                <aside>
                    <div className={classes.aboutImg}></div>
                </aside>
            </div>
        </section>

    )
}

export default AboutUs;