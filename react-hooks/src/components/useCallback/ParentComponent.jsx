 import React, { useState , useCallback} from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';
 
//useCallback Hook
//what ?
//It is a hook that will return a memoized version of the 
//callback fuction that only changes if one
//of the dependencies has changed.
//why ?
//It is useful when passing callbacks to optimized child 
//components that rely on reference equality
//to prevent unnecessary renders.
//How to use ?... 
 
 function ParentComponent() {
 
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])  

    const incrementSalary = useCallback(() => {
        setSalary( salary + 1000)
    }, [salary])

     return (
         <div>
             <Title/>
             <Count text="Age" count = {age}/>
             <Button handleClick = {incrementAge}>increment Age</Button>
             <Count text ="Salary" count={salary}/>
             <Button handleClick={incrementSalary}>Increment Salary</Button>
         </div>
     )
 }
 
 export default ParentComponent
 