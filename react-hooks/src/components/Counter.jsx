import React, {useState, useMemo} from 'react'

//useMemo Hook
//is used for performance optimization
//useCallback and useMemo are same
//it works like useCallback

//Difference is : 
//useCallback: caches the provided fuction instance
//itself.
//useMemo: invokes the provided functin and caches it's resolved
//if you need to cache a function use call back
//if you need to cache resolved of an invoked function 
//then use memo

function Counter() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo( () => {
        let i =0
        while(i<2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])
      
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - (counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd' }</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - (counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
