import style from './footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                &#169; All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer;