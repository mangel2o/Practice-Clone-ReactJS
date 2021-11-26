import { Button, ButtonGroup, Fab } from '@mui/material'
import styles from '../styles/Home.module.css'
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import { useEffect } from 'react';
import useFetch from '../src/hooks/useFetch';
import PostList from '../src/components/PostList';
import CreatePost from '../src/components/CreatePost';
import axios from 'axios';

export default function Home() {
  const { data, setData, loading, error, updateCache } = useFetch('http://localhost:8000/posts');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);
  const categories = [
    "All", "Travel", "Lifestyle", "Business", "Food", "Work"
  ]

  const updateData = (newData) => {
    setData(newData);
    updateCache(newData);
  }

  function handleCategoryChange(e) {
    const selectedCategory = e.target.innerText;
    if (selectedCategory === "ALL") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.category.toUpperCase() === selectedCategory));
    }
  }

  const handleCreate = (newData, newValue) => {
    setOpenCreate(false);

    if (newData && newValue) {
      updateData(newData);
      axios.post(`http://localhost:8000/posts`, newValue);
    }
  }

  useEffect(() => {
    if (data) {
      setPosts(data);
      setFilteredPosts(data);
    }
  }, [data]);


  return (
    <div className={styles.container}>
      <div className={styles.createPost}>
        <Fab onClick={() => setOpenCreate(true)} size="large" style={{ backgroundColor: "orange", color: "white" }}>
          <CreateIcon />
        </Fab>
        <CreatePost open={openCreate} handleClose={handleCreate} data={posts} />
      </div>
      <div className={styles.categoryGroup}>
        <ButtonGroup size="large" aria-label="outlined primary button group">
          {categories.map((category) => (
            <Button className={styles.categoryButton} style={{ width: "120px" }} key={category} onClick={(e) => handleCategoryChange(e)}>
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className={styles.postsContainer}>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {filteredPosts && <PostList data={filteredPosts} updateData={updateData} />}
      </div>
    </div>
  )
}
