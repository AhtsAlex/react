import React from 'react';
import Header__content from './Header__content/Header__content';
import Header__menu from './Header__menu/Header__menu';
import Header__navigator from './Header__navigator/Header__navigator';


function Header() {
    return (<div>
        
            <Header__navigator />
            <Header__menu />
            <Header__content />

        </div>);
}
export default Header;