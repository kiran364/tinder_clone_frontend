import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import "../components/Header.css"
function Header() {
    return (
        <div className = "header">
            <IconButton> 
            <PersonIcon className = "header_icon" fontSize = "large"/>
            </IconButton>

            <img className = "tinder_logo"
             src = "https://logowiki.net/uploads/logo/t/tinder-2.svg" alt = "tinder logo"/>
        
            <IconButton> 
            <ForumIcon className = "header_icon" fontSize = "large"/>
            </IconButton> 
        </div>
    )
}


export default Header
