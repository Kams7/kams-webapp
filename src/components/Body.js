import {useState, useEffect} from 'react'

function Nav() {

    const [transparency, setTransparency] = useState(0.7)
    const styles = {
        color: 'white',
        backgroundColor: `rgb(150,175,5,${transparency})`,
        padding: '400px',
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTransparency((prevTransparency) => {
                if (prevTransparency<=0.7){
                    return 0.7
                } else {
                    return prevTransparency - 0.02
                }
            });
        }, 100)

        return () => clearInterval(interval);
      }, []);

    const adjustColor = (e) => {
        setTransparency(transparency+0.02)
    }

    return (
        <div className="main-body" style={styles} onWheel={adjustColor}>
            Hi all!
        </div>
    );
};

export default Nav;