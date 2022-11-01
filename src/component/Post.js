import "./post.css";
import Avatar from "./Avatar.jpg";
import Image from "./Image (1).jpg";

function Post() {
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

      <div className="footer">
        <div className="footer1">
          <div className="left">
            <div className="footer-logo">
              <Logo />
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <p>Instagram</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
              <p>Facebook</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
              <p>Twitter</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <p>Instagram</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
              <p>Facebook</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
              <p>Twitter</p>
            </div>
          </div>
          <div className="center">
            <div className="c-left">
              <div className="Tag">Use cases</div>
              <div className="social">UI Design</div>
              <div className="social">UX Design</div>
              <div className="social">Prototyping</div>
              <div className="social">UI Design</div>
              <div className="social">UX Design</div>
              <div className="social">Prototyping</div>
            </div>
            <div className="c-left">
              <div className="Tag">Explore</div>
              <div className="social">Figma</div>
              <div className="social">Customers</div>
              <div className="social">Why I Love Figma</div>
              <div className="social">Figma</div>
              <div className="social">Customers</div>
              <div className="social">Why I Love Figma</div>
            </div>
            <div className="c-left">
              <div className="Tag">Resources</div>
              <div className="social">Community Resources Hub</div>
              <div className="social">Support</div>
              <div className="social">Education</div>
              <div className="social">Community Resources Hub</div>
              <div className="social">Support</div>
              <div className="social">Education</div>
            </div>
          </div>
          <div className="right">
            <div className="mail">
              <div className="sub">Subscribe to our newsletter</div>
              <div>
                <input placeholder="Email" />
              </div>
            </div>
          </div>
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
export default Post;

function Title(props) {
  const { text } = props;
  return <div className="titel">{text}</div>;
}
