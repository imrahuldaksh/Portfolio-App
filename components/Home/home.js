import classes from './home.module.css';
import selfImg from '../../images/Rahul_Self.jpg'; //this works when the path is inside the module

const Home = () => {
    return (
        <section className={classes.banner}>
            <h1 className={classes.bannerHeading}>Hi, I'm Rahul. I design & build user interfaces.</h1>
            <div className={classes.wrapper}>
                <div className={classes.heroPara}>
                    <p>
                        I learned to make websites on my own. I know how fun and rewarding it is, but I also know that it can be incredibly frustrating.
                        <strong>I'm here to help make your journey into web development as easy and as fun as possible</strong>.
                    </p>
                    <p>
                        Whether you're trying to learn what you need to tweak your small business' website or you're looking to jump start a new career, I'm here to help.
                    </p>
                </div>
                <div className={classes.selfie}>
                    <img src={selfImg} alt="Selfie" />
                </div>
            </div>
        </section>
    )
}

export default Home;