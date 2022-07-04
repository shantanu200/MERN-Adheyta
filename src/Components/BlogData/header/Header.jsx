import "./header.css";

export default function Header() {
  return (
    <div className="header_blog">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <div className="image_class">
      <img
        className="headerImg"
        src="images/home.svg"
        alt=""
      /></div>
    </div>
  );
}
