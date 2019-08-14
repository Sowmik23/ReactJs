import React, {useState, useEffect} from 'react'
import axios from 'axios'

// fetching data using useEffect part-01, 02, 03

function DataFetching() {

    // const [posts, setPosts] = useState([]) part -01
    const [post, setPost] = useState({}) //part -02
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState (1)
   
   
    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')  part -01
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) //part -02
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)  //part-03
        .then (res => {
            console.log(res)
            // setPosts(res.data)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    // },   []) 
    // },   [id]) 
    },   [idFromButtonClick]) 

    return (
        <div>
            <input type="text" value ={id} onChange={ e => setId(e.target.value)}/>
            <button type="button" onClick= {handleClick
            }>Fetch Post</button>
           {/* part -01 */}
            {/* <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}

            {/* part-02 */}
            {post.title}



        </div>
    )
}

export default DataFetching
