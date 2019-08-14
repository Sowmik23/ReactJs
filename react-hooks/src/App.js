import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour' 
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/useCallback/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';


// this is for userContext ComponentC,E,F
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return ( 
    <div className="App">

      {/* <ClassCounter/> */}

      {/* <HookCounter/> */}

      {/* <HookCounterTwo/>  */}


      <HookCounterThree/>

      <HookCounterFour/>

      <ClassCounterOne/>
      <HookCounterOne/>

      <ClassMouse/>
      {/* <HookMouse/> */}
      <MouseContainer/>

      <IntervalClassCounter/>
      <IntervalHookCounter/>

    {/* it loads the JSON data from database server */}
      <DataFetching/>
     

     {/* Context */}
     <UserContext.Provider value={'Sowmik'}>
       <ChannelContext.Provider value ={'Sarker'}>
            <ComponentC/>
       </ChannelContext.Provider>
     </UserContext.Provider>


    {/* useReducer */}
     <CounterOne/>
     <CounterTwo/>
     <CounterThree/>


      {/* fetching data with useReducer  */}
     <DataFetchingOne/>
     <DataFetchingTwo/>

{/* useCallback */}
    <ParentComponent/>

    {/* useMemo Hook */}
      <Counter/>

      {/* useRef Hook */}
      <FocusInput/>

    </div>
  );
}

export default App;
