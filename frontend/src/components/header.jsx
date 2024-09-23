import logo from "../assets/diary.png";

function Header() {
  return (
    <div class="mt-4 mx-4">
      <a href="/">
        <img src={logo} style="height: 30px;"></img>
      </a>
    </div>
  );
}

export default Header;