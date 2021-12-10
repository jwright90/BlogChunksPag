/*  1.  Get categories array from blogs data
    2.  Create badges from categories array.
        The badges should have state, either selected or unselected
    3.  Filter blogs based on what categories have been selected
    4.  Paginate through the filtered blogs
*/

import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import BlogThumb from './BlogThumb'

function App() {

  const [tags, setTags] = useState([])

  useEffect(()=>{
    const initiateTags = async () => {
      let categories = [...new Set(await blogsData.map(blog => blog.category))]

      setTags(categories.map(category=>({category: [category], state: false})))
    }
    
    initiateTags();
  },[])


  const blogsData = [      
    {title: "First Post", id: 1, category: "interviews"},
    {title: "Second Post", id: 2, category:"job search"},
    {title: "Third Post", id: 3, category: "interviews"},
    {title: "Fourth Post", id: 4, category: "job search"},
    {title: "Fifth Post", id: 5, category: "band 5"},
    {title: "Sixth Post", id: 6, category: "hcpc"},
  ]

  return (
    <main>

    </main>
  );
}

export default App;