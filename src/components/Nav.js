function Nav() {
    const styles = {
        color: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        listStyle:'none'
    }
    return (
        <nav style={{background:'teal', padding:'1rem'}}>
            <ul className='nav-bar' style={styles}>
                <img src='' alt='logo'></img>
                <li><a href="/home">Home</a></li>
                <li><a href="/Projects">Projects and Blog</a></li>
                <li><a href="/about">Contact</a></li>
                <li><a href="/connect">Connect</a></li>
            </ul>
        </nav>
    );
};

export default Nav;