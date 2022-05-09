import React from 'react';
import classes from './aboutus.module.css';

const AboutUs = () => {
    return (
        <section className={classes.aboutus}>
            <h1>About Me</h1>
            <p>I am Rahul Daksh, hails from city <b><em>Bareilly</em></b> in <b>Uttar Pradesh</b>. I did my schooling (10+2) from Army School
                Bareilly Cantt. After that I did B.Tech in <b>Electronics and Communication</b> from <b>ABES Engineering College, Ghaziabad</b>.
            </p>
            <p>I graduated in 2016. From then, till now I am working as a <b>Senior Software Engineer-UI</b>. I explored and worked
                mainly in front-end, and have expertise in the following:
            </p>
            <div className={classes.imgWrap}>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3, SCSS</li>
                    <li>Vanilla JavaScript</li>
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
            <div>
                <p>You can reach me at</p>
                <p><strong>Mobile: </strong>+91 91934 00345</p>
                <p><strong>Email: </strong>iamrdaksh@gmail.com</p>
            </div>
        </section>

    )
}

export default AboutUs;