import React, { Component, useState, useEffect } from 'react'


function App() {

  //state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('react');
  const [url, setUrl] = useState("https://hn.algolia.com/api/v1/search?query=react");

  const [loading, setLoading] = useState(false);


  //fetch news from hacker news api
  const fetchNews = ()=> {
    //set loading true
    setLoading(true)

    fetch(url)
    .then(result => result.json())
    // .then(data => console.log(data))
    .then(data => (setNews(data.hits), setLoading(false)))
    .catch(err => (setLoading(false), console.log(err)));
  };

  useEffect(()=> {
    fetchNews();
  }, [url]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault() //prevent from reloading
    setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  const showLoading = () => {
    return loading ? <h2>Loading...</h2> : ""
  };

  const searchForm = () => (
    <form onSubmit={handleSubmit}> 
        <input type="text" value={searchQuery} onChange={handleChange}/>
        <button>Search</button>
      </form>
  );

  const showNews = () => (
    news.map((n, id)=> (<p key={id}>{n.title}</p>))
  )

  return (
    <div>
      <h2>News</h2>
      
      {searchForm()}

      {showLoading()}
      
      {showNews()}
      
    </div>
  )
}

export default App


















////: Code difference between functional and class components

// function App() {

//   const [count, setCount] = useState(0);
  
//   const incrementCount = () => {
//     setCount(count+1);
//   } 

//   useEffect(() => {
//     console.log(`Clicked ${count} times`);
//     document.title = `Clicked ${count} times`;
//   });

//   return (
//     <div>
//        <h6>Counter App for class Component</h6>
//            <button onClick={incrementCount}>Clicked {count} times</button>  
//     </div>
//   );
// }
// export default App


//class components
// export default class App extends Component {
  
//   state = {
//     count: 0
//   };

//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   componentDidMount() {
//     console.log(`Clicked ${this.state.count} times`);
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   componentDidUpdate() {
//     console.log(`Clicked ${this.state.count} times`);
//     document.title = `Clicked ${this.state.count} times`;
//   }
  
//   render() {
//     return (
//       <div>
//         <h6>Counter App for class Component</h6>
//           <button onClick={this.incrementCount}>Clicked {this.state.count} times</button>
//       </div>
//     )
//   }
// }
