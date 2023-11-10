import styled from "styled-components";

const NavbarLink = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 10px;
    /* Changing the color */
    &:hover {
        color: lightblue;
    }
`;
const styles = {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    listStyle:'none'
}

function Nav() {

    return (
        <nav style={{background:'#17252A', padding:'1rem'}}>
            <ul className='nav-bar' style={styles}>
                <img src='' alt='logo'></img>
                <li><NavbarLink href="/home">Home</NavbarLink></li>
                <li><NavbarLink href="/Projects">Projects and Blog</NavbarLink></li>
                <li><NavbarLink href="/about">Contact</NavbarLink></li>
                <li><NavbarLink href="/connect">Connect</NavbarLink></li>
            </ul>
        </nav>
    );
};

export default Nav;