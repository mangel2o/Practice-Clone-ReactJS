import { Button, ButtonGroup, Fab } from '@mui/material'
import styles from '../styles/Home.module.css'
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import { useEffect } from 'react';
import useFetch from '../src/hooks/useFetch';
import PostList from '../src/components/PostList';


export default function Home() {
  const { data, loading, error } = useFetch('http://localhost:8000/posts');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const categories = [
    "All", "Travel", "Lifestyle", "Business", "Food", "Work"
  ]

  function handleClick(e) {
    const selectedCategory = e.target.innerText;
    if (selectedCategory === "ALL") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.category.toUpperCase() === selectedCategory));
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
        <Fab size="large" style={{ backgroundColor: "orange", color: "white" }}>
          <CreateIcon />
        </Fab>
      </div>
      <div className={styles.categoryGroup}>
        <ButtonGroup size="large" aria-label="outlined primary button group">
          {categories.map((category) => (
            <Button className={styles.categoryButton} style={{ width: "120px" }} key={category} onClick={(e) => handleClick(e)}>
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className={styles.postsContainer}>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {filteredPosts && <PostList data={filteredPosts} />}
      </div>
    </div>
  )
}
