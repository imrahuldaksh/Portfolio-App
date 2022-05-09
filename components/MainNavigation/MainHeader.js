import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const MainHeader = () => {

    const authCtx = useContext(AuthContext);
    const isUserLoggedIn = authCtx.isLoggedIn;
    const hasUserName = authCtx.userName;

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    {
                        hasUserName && (
                            <li className={classes.portfolio}>
                                Welcome {hasUserName} !!
                            </li>
                    )}
                    {
                        !hasUserName && (
                            <li>
                                <NavLink activeClassName={classes.active} className={classes.portfolio} to="/portfolio">Portfolio</NavLink>
                            </li>
                    )}
                    <li>
                        <ul>
                            <li>
                                <NavLink activeClassName={classes.active} to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={classes.active} to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={classes.active} to="/contact">Contact</NavLink>
                            </li>
                            {isUserLoggedIn && (
                                <li>
                                    <NavLink activeClassName={classes.active} to="/profile">Profile</NavLink>
                                </li>
                            )}
                            {!isUserLoggedIn && (
                                <li>
                                    <NavLink activeClassName={classes.active} to="/login">Login</NavLink>
                                </li>
                            )}
                            {isUserLoggedIn && (
                                <li>
                                    <NavLink activeClassName={classes.active} to="/logout">Logout</NavLink>
                                </li>
                            )}
                            <li>
                                <NavLink activeClassName={classes.active} to="/play">Play</NavLink>
                            </li>
                        </ul>
                    </li>


                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;