import {useState, useEffect} from 'react'

function Body() {

    const [transparency, setTransparency] = useState(1)
    const bodyStyles = {
        color: 'white',
        // backgroundColor: `#3AAFA9`,
        backgroundColor: `rgb(58,175,169,${transparency})`,
        padding: '50px',
        height: '700px',
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTransparency((prevTransparency) => {
                if (prevTransparency>=1){
                    return 1
                } else {
                    return prevTransparency + 0.02
                }
            });
        }, 70)

        return () => clearInterval(interval);
      }, []);

    const adjustColor = (e) => {
        setTransparency((transparency)=>{
            if (transparency<0.3){return 0.3} else{return transparency-0.02}})
        console.log(transparency)
    }

    return (
        <main className="main-body" style={bodyStyles} onWheel={adjustColor}>
            <section>
                <article>
                    Hi
                </article>
                <article>
                    Bye
                </article>
            </section>
        </main>
    );
};

export default Body;