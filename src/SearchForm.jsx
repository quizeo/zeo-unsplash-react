import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { QueryClient, useMutation } from "@tanstack/react-query";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  // const queryClient = new QueryClient();

  // const { mutate } = useMutation({
  //   mutationFn: (searchValue) => {
  //     setSearchTerm(searchValue);
  //   },
  //   onSuccess: () => {
  //     console.log("Search term updated successfully");
  //     queryClient.invalidateQueries(["images"]);
  //   },
  //   onError: () => {
  //     console.log("Error updating search term");
  //   },
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    console.log(searchValue);
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="form-input search-input"
          type="text"
          placeholder="cat"
          name="search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
