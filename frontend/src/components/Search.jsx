import { apiSearch } from "../functions/api";
import { currentDir, setCurrentMenu } from "../functions/exports";

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
      <input onKeyDown={handleSearch} id="search" class="form-control" title="Search" placeholder="Search"></input>
    </div>
  );
}

export default Search;