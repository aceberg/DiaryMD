
function DownButton() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollUp = () => {
    window.scrollBy({
      top: -window.innerHeight, // Scroll by one screen height
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by one screen height
      behavior: "smooth",
    });
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
    }}>
      <i class="bi bi-chevron-bar-up shade-hover rounded-2 p-2 big-btn" title="Top" 
        onClick={scrollTop}
      >
      </i>
      <br></br>
      <i class="bi bi-chevron-up shade-hover rounded-2 p-2 big-btn" title="Up" 
        onClick={scrollUp}
      >
      </i>
      <br></br>
      <i class="bi bi-chevron-down shade-hover rounded-2 p-2 big-btn" title="Down" 
        onClick={scrollDown}
      >
      </i>
      <br></br>
      <i class="bi bi-chevron-bar-down shade-hover rounded-2 p-2 big-btn" title="Bottom" 
        onClick={scrollBottom}
      >
      </i>
    </div>
  );
}

export default DownButton;
