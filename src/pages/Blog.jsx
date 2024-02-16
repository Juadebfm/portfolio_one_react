import React, { useEffect, useState } from "react";
import "../index.css";
import Searchbar from "../components/lcomp/Searchbar";

const Blog = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Define state variables to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);
  // The number of posts to display per page.
  const postsPerPage = 20;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        setData(posts);
      };
      fetchData();
    } catch (error) {
      console.log("Error Discovered:", error);
    }
  }, []);

  const handleSearch = (input) => {
    setSearchInput(input);
    setCurrentPage(1); // Reset to the first page after searching

    if (input === "") {
      setFilteredData([]);
    } else {
      const filteredPosts = data.filter((post) =>
        post.id.toString().includes(input)
      );
      setFilteredData(filteredPosts);
    }
  };

  // Logic to calculate the index of the last post in the current page
  // These lines calculate the indices of the first and last posts to be displayed on the current page, based on the current page number and the number of posts per page. It then creates an array currentPosts containing the subset of posts to display on the current page.

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    searchInput === ""
      ? data.slice(indexOfFirstPost, indexOfLastPost)
      : filteredData;

  // Function to handle page change
  // This function handles page changes. It takes a pageNumber argument and updates the currentPage state accordingly.
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="Blog_page_container container_pd">
      <Searchbar onSearch={handleSearch} />
      <div className="Blog_page">
        {currentPosts.map((post) => (
          <div key={post.id} className="Blog_news_card">
            <span>{post.id}</span>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <div className="Pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={currentPage === 1 ? "btn_no_bg" : "btn_bg"}
        >
          Prev
        </button>

        {Array.from(
          {
            length: Math.ceil(
              searchInput === ""
                ? data.length / postsPerPage
                : filteredData.length / postsPerPage
            ),
          },

          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={
                currentPage === index + 1 ? "btn_bg active" : "btn_no_bg"
              }
            >
              {index + 1}
            </button>
          )
        )}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage ===
            Math.ceil(
              searchInput === ""
                ? data.length / postsPerPage
                : filteredData.length / postsPerPage
            )
          }
          className={
            currentPage ===
            Math.ceil(
              searchInput === ""
                ? data.length / postsPerPage
                : filteredData.length / postsPerPage
            )
              ? "btn_no_bg"
              : "btn_bg"
          }
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Blog;
