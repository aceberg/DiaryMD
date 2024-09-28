
function Search() {

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const search = document.getElementById("search").value;
      if (search != '') {
        console.log("Search:", search);
      }
    }
  };

  return (
    <div class='file-place'>
      <input onKeyDown={handleSearch} id="search" class="form-control" placeholder="Search"></input>
    </div>
  );
}

export default Search;