import React from 'react';
import styled from 'styled-components'
import logo from '../logo.svg';
import { social, elevation, fixed, serif} from '../utilities'


const Header = ({className}) => {
    return (
        <header className={className}>
        <img src={logo}  alt="logo" className="logo" />
        Hello
        </header>
    )
}

export default styled(Header)`
background: ${social.twitter};
padding: 10px 5%;
width: 100%;
${serif}
${fixed ()}
${elevation[0]}
.logo {
    width: 60px;
}
`
