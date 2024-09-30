import logo from "../assets/diary1.png";
import Config from "./Config";
import ConfigSettings from "./ConfigSettings";
import ConfigTheme from "./ConfigTheme";

function Header() {
  return (
    <>
    <div class='d-flex justify-content-between mt-4 mx-4'>
      <a href="/">
        <img src={logo} style="height: 30px;"></img>
      </a>
      <Config></Config>
    </div>
    <ConfigSettings></ConfigSettings>
    <ConfigTheme></ConfigTheme>
    </>
  );
}

export default Header;