import { useState } from "react";

const headerComps = [
  {
    href: "../login/home.html",
    src: "assets/home.svg",
    type: "svg",
    alt: "home",
    dis: "HOME",
  },
  {
    href: "../login/login.html",
    src: "assets/login.svg",
    type: "svg",
    alt: "login",
    dis: "LOGIN",
  },
  {
    href: "../login/register.html",
    src: "assets/register.svg",
    type: "svg",
    alt: "regiter",
    dis: "REGISTER",
  },
];
const blogBox = [
  {
    Heading: "What is Cloud Computing",
    content:
      "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.",
    postedDay: "Sat",
    postedDate: "Dec 23 2023",
    postedTime: "16:02:43",
    user: "Admin",
    image: "assets/img/cloud.jpg",
  },
  {
    Heading: "What is cyber security",
    content:
      "Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security.",
    postedDay: "mon",
    postedDate: "march 26 2024",
    postedTime: "15:03:43",
    user: "harish",
    image: "assets/img/cybersecuity.jpg",
  },
  {
    Heading: "What is Artificial intelegence",
    content:
      "Artificial intelligence is the ability of a computer or computer-controlled robot to perform tasks that are commonly associated with the intellectual processes characteristic of humans, such as the ability to reason.",
    postedDay: "mon",
    postedDate: "march 26 2024",
    postedTime: "15:46:03",
    user: "harish",
    image: "assets/img/ai.jpg",
  },
];

const categoriesList = [
  { title: "Technology" },
  { title: "cyber security" },
  { title: "cloud computing" },
  { title: "robotic" },
];
export default function App() {
  return (
    <div>
      <Header />
      <Aside />
      <Main />
    </div>
  );
}
function Header() {
  return (
    <header className="header-1">
      <div className="header-1-blog">
        <a href="blogSite">BLOG SITE</a>
      </div>
      <div className="header-navigator">
        {headerComps.map((comp) => (
          <LoginButton comp={comp} key={comp.alt} cn={"header-comp"} />
        ))}
        ;
      </div>
    </header>
  );
}
function Aside() {
  const [flag, setFlag] = useState(0);
  return (
    <>
      <button className="hamburger-menu" onClick={() => setFlag(!flag)}>
        <img src="../assets/hamburger menu.svg" alt="" />
      </button>
      <aside className={flag ? "RightToLeftHamburger" : "hidden"}>
        <div className="HamburgerOption">
          {headerComps.map((comp) => (
            <LoginButton comp={comp} key={comp.alt} cn={"header-comp2"} />
          ))}
          ;
        </div>
      </aside>
    </>
  );
}
function LoginButton({ cn, comp }) {
  return (
    <div className={cn}>
      <img src={comp.src} type={comp.type} alt={comp.alt} />
      <a href={comp.href}>{comp.dis}</a>
    </div>
  );
}

function Main() {
  return (
    <main>
      <section className="main-section-1">
        {blogBox.map((blog) => (
          <BlogBox blog={blog} key={blog.postedTime} />
        ))}
      </section>
      <Aside2 />
    </main>
  );
}
function BlogBox({ blog }) {
  console.log(blog);
  return (
    <>
      <div className="blog-box">
        <div className="blog-topic-box">
          <div className="blog-topic">
            <h3>{blog.Heading}</h3>
          </div>
          <div className="blog-content">
            <p>{blog.content}</p>
          </div>
          <div className="blog-details">
            <p>
              Posted on {blog.postedDay} {blog.postedDate} {blog.postedTime} by{" "}
              {blog.user}
            </p>
          </div>
          <button className="blog-box-button">READ MORE &rarr;</button>
        </div>
        <div className="img-box">
          <img src={blog.image} alt={blog.Heading} />
        </div>
      </div>
      <hr />
    </>
  );
}

function Aside2() {
  return (
    <aside className="categories">
      <div className="categories-head">
        <h3>CATEGORIES</h3>
      </div>
      <hr />
      <div className="categories-list">
        {categoriesList.map((list) => (
          <ul>{list.title}</ul>
        ))}
      </div>
    </aside>
  );
}
