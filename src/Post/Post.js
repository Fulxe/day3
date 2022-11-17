import "./post.css";
import Avatar from "./Avatar.jpg";
import Image from "./Image (1).jpg";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";

function Post() {
  return (
    <div className="App">
      <div className="second">
        <div className="Heading">
          <h1>10 Secrets for managing a remote team </h1>
        </div>
        <div className="creater">
          <div className="sec">
            <div className="img">
              <img src={Avatar} />
            </div>
            <div className="p">
              <p>Shedrack eze</p>
            </div>
            <div className="border"></div>
            <div className="date">
              <p>2nd January,2022</p>
            </div>
          </div>
        </div>
        <div className="clap">
          <img src={Image} />
        </div>
      </div>

      <div className="mirage">
        <div className="dust">
          <Title
            text={
              "If youre thinking of starting a blog of your own, but just dont have a clue on what to blog about, then fear not"
            }
          />
          <Title
            text={
              "In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal."
            }
          />
          <Title
            text={
              "Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting."
            }
          />
          <Title
            text={
              "Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own."
            }
          />
          <Title
            text={
              "Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and "
            }
          />
        </div>
      </div>
      <div className="end">
        <div className="end2">
          <div className="end3">
            <img src={Avatar} />
            <div className="end3-1">
              <div className="write">
                <p>Written By</p>
              </div>
              <div className="Name">
                <p>Shedrack Eze</p>
              </div>
              <div className="Team">
                <p>CEO Team App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Line">
        <div></div>
      </div>
      <div className="com">
        <div className="conversation">
          <div className="join">
            <p>Join the conversation</p>
          </div>
          <div className="comment">
            <div>
              {" "}
              <img src={Avatar} />
            </div>
            <input type="text" placeholder="comments" />
          </div>
        </div>
      </div>
          <Footer/>
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
export default Post;

function Title(props) {
  const { text } = props;
  return <div className="titel">{text}</div>;
}
