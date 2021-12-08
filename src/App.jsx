import React from 'react';
import {useState} from 'react';
import './App.css';
import BlogThumb from './BlogThumb'


function App() {

  function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
          const chunk = arr.slice(i, i + chunkSize);
          res.push(chunk);
      }
      return res;
  }

  const blogsData = [      
    {title: "First Post", id: 1},
    {title: "Second Post", id: 2},
    {title: "Third Post", id: 3},
    {title: "Fourth Post", id: 4},
    {title: "Fifth Post", id: 5},
    {title: "Sixth Post", id: 6},
  ]

  const [blogs, setBlogs] = useState(blogsData);
  const [blogChunks, setBlogChunks] = useState(sliceIntoChunks(blogs,3))

  return (
    <main>
      {blogs.map(blog=><BlogThumb title={blog.title} key={blog.id}/>)}
    </main>
  );
}

export default App;