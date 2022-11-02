import "./blog.css";
import Img1 from "./image/img1.jpg";
import Post from "../second/Second";

function Blog() {
  return (
    <div className="App">
      <div className="navbar">
        <Logo />
        <div className="navbar-right">
          <div className="nv-text">Product</div>
          <div className="nv-text">Services</div>
          <div className="nv-text">Contact</div>
          <div className="nv-text">Log in</div>
          <div className="nv-tex">
            <p>Get Access</p>
          </div>
        </div>
      </div>
      <div className="Head">
        <div className="head2">
          <h1>Blog posts</h1>
          <p>Our latest updates and blogs about managing your team</p>
        </div>
      </div>
      <div className="posts">
        <div className="post2">
          <Post
            src={Img1}
            text={
              "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            }
            heading={"The Emotional Toll of Being in UX"}
          />
          <Post
            text={
              "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team"
            }
            heading={"10 secret tips for managing a team remotely"}
          />
          <Post
            text={
              "How the iPhone popularized steampunk… and how the iPhone killed it off"
            }
            heading={"What Ever Happened to Steampunk?"}
          />
        </div>
      </div>
    </div>
  );
}
function Logo() {
  return (
    <div className="navbar-left">
      <p>team</p>
    </div>
  );
}
export default Blog;
