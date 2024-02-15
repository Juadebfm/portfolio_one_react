import React, { useEffect, useState } from "react";
import "../index.css";
import Searchbar from "../components/lcomp/Searchbar";

const Blog = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        console.log(posts);
        setData(posts);
      };
      fetchData();
    } catch (error) {
      console.log("Error Discovered:", error);
    }
  }, []);

  const handleSearch = (input) => {
    setSearchInput(input);

    if (input === "") {
      setFilteredData([]);
    } else {
      const filteredPosts = data.filter((post) =>
        post.id.toString().includes(input)
      );
      setFilteredData(filteredPosts);
    }
  };

  return (
    <main className="Blog_page_container container_pd">
      <Searchbar onSearch={handleSearch} />
      <div className="Blog_page">
        {searchInput === ""
          ? data.map((post) => (
              <div key={post.id} className="Blog_news_card">
                <span>{post.id}</span>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))
          : filteredData.map((post) => (
              <div key={post.id} className="Blog_news_card">
                <span>{post.id}</span>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))}
      </div>
    </main>
  );
};

export default Blog;
