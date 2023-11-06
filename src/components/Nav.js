function Nav() {
    const styles = {
        color: 'grey',
        backgroundColor: 'lightgreen',
        padding: '40px',
        paddingInline: '10px'
    }
    return (
        <nav className="main-nav">
            <div className='nav-bar' style={styles}>
                <span>Profile</span>
                <span>Projects</span>
                <span>Contact</span>
                <span>Connect</span>
            </div>
        </nav>
    );
};

export default Nav;