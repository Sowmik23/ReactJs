import React, {useState, useEffect} from 'react'

//useEffect with incorrect dependency

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }


    

    useEffect(() => {
        // function doSomething() {
        //     console.log(someProp)
        // }
        // doSomething()
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            {count }
        </div>
    )
}

export default IntervalHookCounter
