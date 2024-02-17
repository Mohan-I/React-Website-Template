import React, { useState } from "react";
import "./App.css"; // Include your CSS file for styling
import Navbar from "./Navbar";
import Banner from "./components/banner";
import ExperienceParagraph from "./components/ExperienceParagraph";
import AnimatedImage from "./components/AnimatedImage";
import LanguagesAndTools from "./components/LanguagesAndTools";
import WorkExperienceChart from "./components/WorkExperienceChart";
import MyStats from "./components/MyStats";
// import MyContribution from "./components/MyContribution";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import MainContent from "./components/MainContent";
import Accordions from "./components/Accordions";
import Blogs from "./components/Blogs";
import MyTestimonial from "./components/MyTestimonial";
import myImage from "./components/assets/images/about.gif";
import NewsletterForm from "./components/NewsletterForm";
// import Contact from './ContactUsPage';
// import Services from './Services';
// import About from './About';
// import Home from './App';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const posts = [
    {
      title: "Blog Post 1",
      image: "https://i.imgur.com/vZefnRX.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Blog Post 2",
      image: "https://i.imgur.com/Apvu5Wo.png",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    // Add more blog posts as needed
  ];

  const myPercentage = 75; // Example percentage
  const myPercentage2 = 65; // Example percentage
  const myPercentage3 = 25; // Example percentage
  const myPercentage4 = 85; // Example percentage

  const myTestimonial = {
    text: "This is my testimonial text. It can be a long paragraph describing my experience or feedback.",
    author: "John Doe",
    image: myImage, // Optional image
  };

  const myTestimonial2 = {
    text: "This is my testimonial text. It can be a long paragraph describing my experience or feedback.",
    author: "John Doe",
    image: myImage, // Optional image
  };

  const myTestimonial3 = {
    text: "This is my testimonial text. It can be a long paragraph describing my experience or feedback.",
    author: "John Doe",
    image: myImage, // Optional image
  };

  const myTestimonial4 = {
    text: "This is my testimonial text. It can be a long paragraph describing my experience or feedback.",
    author: "John Doe",
    image: myImage, // Optional image
  };

  // const events = [
  //   { date: "16 January 2024", description: "Project started" },
  //   { date: "16 January 2024", description: "Phase 1 completed Frontend" },
  //   { date: "", description: "Phase 2 completed Database" },
  //   { date: "", description: "Phase 3 completed Hosting" },
  //   { date: "expect . April 2024", description: "Project finished" },
  // ];

  return (
    <>
      <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <header>
          <div className="container">
            <div className="left">
              <button onClick={toggleDarkMode}>
                {isDarkMode ? "🌕" : "🌙"}
              </button>
            </div>

            <div className="right">
              <Navbar />
            </div>
          </div>
        </header>
        <main>
          {/* The content must go here */}
          <Banner />
          <div className="row">
            <div className="column">
              <ExperienceParagraph />
            </div>
            <div className="column">
              <AnimatedImage />
              <br />
            </div>
          </div>
          <br />
          <br />
          <hr />
          <LanguagesAndTools />
          <MainContent />
          <div className="topspace"></div>
          <div className="row">
            <div className="column">
              <WorkExperienceChart />
            </div>
            <div className="column">
              <MyStats />
            </div>
          </div>
          <hr width="50%" />
          <center>
            <br />
            <h1 className="writer2">FAQS (Frequently Asked Questions)</h1>
          </center>
          <Accordions
            items={[
              { title: "Accordion 1", content: "Content 1" },
              { title: "Accordion 2", content: "Content 2" },
              { title: "Accordion 3", content: "Content 3" },
            ]}
          />
          <div>
            <center>
              <br />
              <h1 className="writer2">Latest Blog Posts</h1>
              <hr width="50%" />
            </center>
            <Blogs posts={posts} />
          </div>
          <center>
            <h1 className="writer2">TESTIMONIALS</h1>
            <div className="row">
              <div className="column">
                <div className="row">
                  <div className="column">
                    <MyTestimonial {...myTestimonial} />
                  </div>
                  <div className="column">
                    <MyTestimonial {...myTestimonial2} />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="row">
                  <div className="column">
                    <MyTestimonial {...myTestimonial3} />
                  </div>
                  <div className="column m-warning">
                    <p>AND MANY MORE....</p>
                    <svg width="150px" height="150px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M655.1 307.6s21.9-44 25-62.7c0 0 19.6-49.7 0-62.4 0 0-7.5-25.5-20-11.4l-26.9 25.6 21.9 110.9z" fill="#FFFFFF" /><path d="M653.8 316.8l-24-121.2 28-26.7c3.7-4.2 7.6-5.8 11.6-4.9 7.6 1.7 11.9 12.9 13.1 16.5 19.3 14.3 2.1 60.5 0.4 65.1-3.3 19-24.3 61.4-25.2 63.2l-3.9 8z m-17.4-119.1l19.9 100.5c6.4-13.5 18.6-40.5 20.8-53.8l0.1-0.3 0.1-0.3c5.2-13.2 15.5-49.5 1.2-58.8l-0.9-0.6-0.3-1.1c-1.2-4-4.9-12.5-9-13.4-1.7-0.4-3.7 0.7-5.9 3.2l-0.2 0.2-25.8 24.4z" fill="#843A5F" /><path d="M377.1 298.8s-70.6-55.3-50.6-78c0 0 11.1-53.3 30.2-56l6.6-13.8 31.1 21.1-17.3 126.7z" fill="#FFFFFF" /><path d="M379.4 304.4l-4.1-3.2c-2.2-1.7-52.7-41.6-55.2-68.5-0.5-5.1 0.8-9.6 3.7-13.2 1.7-8.1 12.1-52.3 30.9-57.3l7.5-15.6 35.5 24.1-18.3 133.7z m-14.8-148.9l-5.8 12.1-1.6 0.2c-13.9 1.9-24.7 39.4-27.7 53.6l-0.2 0.8-0.5 0.6c-2.2 2.5-3.1 5.5-2.7 9.3 1.9 20.2 36.7 50.9 48.8 61l16.3-119.5-26.6-18.1z" fill="#843A5F" /><path d="M511.6 651.3m-214 0a214 214 0 1 0 428 0 214 214 0 1 0-428 0Z" fill="#AE9AA4" /><path d="M511.6 868.3c-58 0-112.5-22.6-153.5-63.6s-63.6-95.5-63.6-153.5 22.6-112.5 63.6-153.5 95.5-63.6 153.5-63.6 112.5 22.6 153.5 63.6 63.6 95.5 63.6 153.5-22.6 112.5-63.6 153.5c-41.1 41-95.6 63.6-153.5 63.6z m0-428.1c-116.4 0-211 94.7-211 211 0 116.4 94.7 211 211 211s211-94.7 211-211-94.7-211-211-211z" fill="#843A5F" /><path d="M511.6 572.5l-70.5-122H582z" fill="#FFFFFF" /><path d="M511.6 578.5l-75.6-131h151.3l-75.7 131z m-65.3-125l65.2 113 65.2-113H446.3z" fill="#843A5F" /><path d="M513 452.4l-43.4 75.2h86.8z" fill="#843A5F" /><path d="M370 177.7v193.7c0 43.5 35.6 79.1 79.1 79.1h127.8c43.5 0 79.1-35.6 79.1-79.1V177.7" fill="#E6D8DF" /><path d="M576.8 453.5H449.1c-45.3 0-82.1-36.8-82.1-82.1V177.7h6v193.7c0 42 34.1 76.1 76.1 76.1h127.8c42 0 76.1-34.1 76.1-76.1V177.7h6v193.7c0 45.3-36.9 82.1-82.2 82.1z" fill="#843A5F" /><path d="M432.3 259.8m-67.9 0a67.9 67.9 0 1 0 135.8 0 67.9 67.9 0 1 0-135.8 0Z" fill="#FFFFFF" /><path d="M432.3 330.8c-39.1 0-70.9-31.8-70.9-70.9s31.8-70.9 70.9-70.9c39.1 0 70.9 31.8 70.9 70.9s-31.7 70.9-70.9 70.9z m0-135.9c-35.8 0-64.9 29.1-64.9 64.9s29.1 64.9 64.9 64.9 64.9-29.1 64.9-64.9-29.1-64.9-64.9-64.9z" fill="#843A5F" /><path d="M593 259.8m-67.9 0a67.9 67.9 0 1 0 135.8 0 67.9 67.9 0 1 0-135.8 0Z" fill="#FFFFFF" /><path d="M593 330.8c-39.1 0-70.9-31.8-70.9-70.9S553.9 189 593 189c39.1 0 70.9 31.8 70.9 70.9s-31.8 70.9-70.9 70.9z m0-135.9c-35.8 0-64.9 29.1-64.9 64.9s29.1 64.9 64.9 64.9 64.9-29.1 64.9-64.9-29.1-64.9-64.9-64.9z" fill="#843A5F" /><path d="M532.4 274.6h-6c0-7.4-6-13.4-13.4-13.4s-13.4 6-13.4 13.4h-6c0-10.7 8.7-19.4 19.4-19.4 10.7-0.1 19.4 8.7 19.4 19.4zM512.7 439.3c-8.4 0-18.3-2-18.3-7.7h6c0-0.4-0.2-0.7-0.2-0.8 0.7 0.8 5.3 2.4 12.5 2.4s11.8-1.6 12.5-2.4c-0.1 0.1-0.2 0.3-0.2 0.8h6c0 5.7-9.8 7.7-18.3 7.7z" fill="#843A5F" /><path d="M380.4 87.7s-58.1 26.6-10.4 84.9c0 0-18.8 19.4 94 10.4 0 0 39.6 8.7 76.3 4.5 0 0 64.6 5.6 115.7-9 0 0 14.2-29.2 5-32.9-9.2-3.7-3.1-30.8-71-23.3 0 0-41.1-40-83.2-27.4 0 0-43.2-6-68.8 15.8-0.2-0.2-54.3 19.9-57.6-23z" fill="#FFFFFF" /><path d="M518.5 191.6c-27.2 0-51-4.8-54.7-5.6-33.7 2.7-59 3.1-75.3 1.2-12.9-1.5-19.9-4.3-22-8.9-1-2-0.7-4-0.1-5.5-15.1-19-20.8-36.8-17.1-53 5.4-23.5 28.9-34.5 29.9-34.9l3.9-1.8 0.3 4.3c0.7 9.6 4.3 16.5 10.5 20.4 14.3 9.1 38.7 1.2 42.4 0 24.9-20.7 64.4-16.9 70.1-16.2 39.8-11.4 77.7 21.1 84.5 27.4 52.6-5.5 61.8 9.9 67.4 19.1 1.4 2.3 2.5 4.1 3.7 4.6 1.9 0.8 3.4 2.3 4.2 4.4 3.5 9.2-6.4 30.2-7.6 32.6l-0.6 1.2-1.3 0.4c-49.2 14.1-111.5 9.5-116.5 9.1-7.2 0.9-14.6 1.2-21.7 1.2z m-54.3-11.7l0.4 0.1c0.4 0.1 39.5 8.6 75.3 4.4h0.6c0.6 0.1 63.6 5.3 113.3-8.5 3.8-8.2 8.7-21.7 6.8-26.6-0.3-0.7-0.6-0.9-0.8-1-3.1-1.3-4.8-4.1-6.6-7-4.9-8.1-13-21.6-63-16.1l-1.4 0.2-1-1c-0.4-0.4-40.4-38.6-80.3-26.7l-0.6 0.2-0.6-0.1c-0.4-0.1-42.2-5.5-66.5 15.1l-0.4 0.3-0.5 0.2c-1.2 0.5-30.2 11.1-48.2-0.4-6.8-4.4-11.1-11.2-12.7-20.5-6.4 3.9-19.3 13.5-22.8 28.8-3.4 14.7 2.4 31.3 17.2 49.4l1.7 2.1-1.9 1.9c-0.1 0.1-0.5 0.6-0.2 1.1 0.9 1.8 9.7 10.7 91.8 4.2l0.4-0.1z" fill="#843A5F" /><path d="M749.2 917.6H274.7c-6.6 0-12-5.4-12-12V530c0-6.6 5.4-12 12-12h474.5c6.6 0 12 5.4 12 12v375.6c0 6.6-5.4 12-12 12z" fill="#FFFFFF" /><path d="M749.2 920.6H274.7c-8.3 0-15-6.7-15-15V530c0-8.3 6.7-15 15-15h474.5c8.3 0 15 6.7 15 15v375.6c0 8.3-6.7 15-15 15zM274.7 521c-5 0-9 4-9 9v375.6c0 5 4 9 9 9h474.5c5 0 9-4 9-9V530c0-5-4-9-9-9H274.7z" fill="#843A5F" /><path d="M286.9 744.4c-12.9 18-33.9 18-46.8 0s-12.9-47.1 0-65c12.9-18 33.9-18 46.8 0 12.9 17.9 12.9 47 0 65z" fill="#E6D8DF" /><path d="M263.5 760.8c-9.8 0-19-5.2-25.8-14.7-13.6-18.9-13.6-49.7 0-68.6 6.8-9.5 16-14.7 25.8-14.7s19 5.2 25.8 14.7c13.6 18.9 13.6 49.7 0 68.6-6.8 9.5-16 14.7-25.8 14.7z m0-92c-7.8 0-15.3 4.3-21 12.2-12.2 17-12.2 44.6 0 61.5 5.7 7.9 13.1 12.2 21 12.2 7.8 0 15.3-4.3 21-12.2 12.2-17 12.2-44.6 0-61.5-5.8-7.8-13.2-12.2-21-12.2z" fill="#843A5F" /><path d="M785 744.4c-12.9 18-33.9 18-46.8 0s-12.9-47.1 0-65c12.9-18 33.9-18 46.8 0 12.9 17.9 12.9 47 0 65z" fill="#E6D8DF" /><path d="M761.6 760.8c-9.8 0-19-5.2-25.8-14.7-13.6-18.9-13.6-49.7 0-68.6 6.8-9.5 16-14.7 25.8-14.7s19 5.2 25.8 14.7c13.6 18.9 13.6 49.7 0 68.6-6.8 9.5-16 14.7-25.8 14.7z m0-92c-7.8 0-15.3 4.3-21 12.2-12.2 17-12.2 44.6 0 61.5 5.7 7.9 13.1 12.2 21 12.2 7.8 0 15.3-4.3 21-12.2 12.2-17 12.2-44.6 0-61.5-5.7-7.8-13.1-12.2-21-12.2z" fill="#843A5F" /><path d="M508.5 366.4s-44.6-7.4-58.4 6.8c0 0-17.5 15.7-7.8 35.5l3.8 12.3 19-7.5 7 13.9 5.1-16.5c0.6-2 3.6-1.9 4 0.2l2.2 11.6 12.4-15.3 22.1 18.8 2.7-17.3 12.8 11.3 11.5-12.8 4.3 16 14.5-16 12.5 16.5 8.3-14.3s12.8-19 2.3-29.5c0 0-1.8-18-15.8-17l-62.5 3.3z" fill="#FFFFFF" /><path d="M472.8 435.3l-9.1-18.1-19.5 7.7-4.6-15.1c-10-20.6 7-37.3 8.4-38.7 14.2-14.6 56.2-8.4 60.7-7.7l62-3.2c12.7-0.9 17.7 11.3 18.8 18.7 10.5 11.9-1.5 30.8-2.6 32.4l-10.5 18.1-13-17.2-15.8 17.4-4.2-16-9.8 10.8-10.9-9.6-2.7 17.1-23.8-20.2-14.6 17.9-2.7-14.2-6.1 19.9z m22.6-32.2l20.3 17.3 2.7-17.4 14.7 12.9 13.2-14.7 4.3 16 13.2-14.6 12 15.8 6.1-10.5c0.1-0.2 11.2-17.1 2.6-25.7l-0.8-0.8-0.1-1.1c-0.1-0.6-1.7-15.1-12.5-14.3l-62.7 3.3-0.3-0.1c-12-2-45.4-4.8-55.7 5.9l-0.2 0.1c-0.6 0.6-15.7 14.5-7.1 31.9l0.2 0.5 2.8 9.1 18.5-7.3 4.9 9.7 2.9-9.3c0.7-2.3 2.7-3.7 5.1-3.6 2.4 0.1 4.2 1.8 4.7 4.1l1 5.3 10.2-12.5z" fill="#843A5F" /><path d="M649.6 867.8H375.9c-6.6 0-12-5.4-12-12V582.1c0-6.6 5.4-12 12-12h273.6c6.6 0 12 5.4 12 12v273.6c0.1 6.7-5.3 12.1-11.9 12.1z" fill="#FFFFFF" /><path d="M649.6 870.8H375.9c-8.3 0-15-6.7-15-15V582.1c0-8.3 6.7-15 15-15h273.6c8.3 0 15 6.7 15 15v273.6c0.1 8.3-6.7 15.1-14.9 15.1zM375.9 573.1c-5 0-9 4-9 9v273.6c0 5 4 9 9 9h273.6c5 0 9-4 9-9V582.1c0-5-4-9-9-9H375.9z" fill="#843A5F" /><path d="M387.6 805.8l-4.8-3.6 66.2-88.3 31.8 42.6 63.8-85.1 31.9 42.5 61.4-81.8 4.8 3.6-66.2 88.2-31.9-42.5-63.8 85.1-31.8-42.6z" fill="#843A5F" /></svg>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </center>
          <div className="topspace">
          <NewsletterForm />
          </div>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
