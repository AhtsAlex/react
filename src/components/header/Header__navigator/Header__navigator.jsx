import React from 'react';
import classes from './Header__navigator.module.css';
import navLogo from './logo.png';


function Header__navigator() {
    return (<div>
        <div  className={classes.Header__navigator}>
        
            <div>
                <ul className={classes.LeftNav}>
                    <li><a href="#" className={classes.navLink}>Tour</a></li>
                    <li><a href="#" className={classes.navLink}>Features</a></li>
                    <li><a href="#" className={classes.navLink}>Pricing</a></li>
                </ul>
            </div>
            <div><a href="#"><img src={navLogo} alt="New Providence"/></a></div>
            <div><ul className={classes.RightNav}>
                    <li><a href="#" className={classes.navLink}>Help</a></li>
                    <li><a href="#" className={classes.navLink}>Contacts</a></li>
                    <li><a href="#"> Get App</a></li>
                </ul>
            </div>
        </div>

    </div>);

    
}

export default Header__navigator;