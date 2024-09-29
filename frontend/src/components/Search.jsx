import { apiSearch } from "./api";
import { currentDir, setCurrentMenu } from "./exports";

function Search() {

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      const search = document.getElementById("search").value;
      if (search != '') {
        const dirs = await apiSearch(currentDir().ID, search);
        console.log("Search:", dirs);
        setCurrentMenu(dirs);
        document.getElementById("search").value = '';
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