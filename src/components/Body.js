import {useState, useEffect} from 'react'

function Nav() {

    const [transparency, setTransparency] = useState(0.6)
    
    const styles = {
        color: 'white',
        backgroundColor: `rgb(220,20,60,${transparency})`,
        padding: '500px',
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTransparency((prevTransparency) => {
                if (prevTransparency<=0.6){
                    return 0.6
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