import React from "react";
import stockViewer from "../assets/images/stockviewer_image.PNG";
import socialMedia from "../assets/images/socialmedia_image.PNG";
import cdStore from "../assets/images/cdstore_image.PNG";
import consoleApp from "../assets/images/consoleapp_image.PNG";
import ScrollContainer from "react-indiana-drag-scroll";

export default function AboutPage() {
  const works = [
    {
      img: stockViewer,
      title: "Stock Viewer Website",
      discription:
        "An web application for viewing stock. Using ReactJS for the front-end and NodeJS (Express) for the backend along with MySQL database for the static stock data.",
    },
    {
      img: socialMedia,
      title: "Social Media Website",
      discription:
        "An web application about social media platform. Using ReactJS for the front-end and NodeJS (Express) for the backend along with Firebase cloud functions.",
    },
    {
      img: cdStore,
      title: "DVD Store Management System",
      discription:
        "An console application for DVD Store using Java, applying binary tree to store DVD information and algorithm into displaying and sorting DVD based on it's borrow rate",
    },
    {
      img: consoleApp,
      title: "Billboard Manager",
      discription:
        "An GUI application for managing billboards using Java Swing for building the GUI and MariaDB for the backend.",
    },
  ];
  return (
    <div>
      <section className="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Web Application Developer
        </p>
        <div className="about__body">
          <p>
            Spending the last two years studying at Queensland University of
            Technology (QUT) has helped me to develop skills in OOP programming
            and understanding of data structures and algorithms. I consider
            myself a hard-working, self-motivated, and responsible for
            delivering quality work kind of person, which can be determined
            through my distinction GPA and the projects that I have carried out.
          </p>
        </div>
      </section>
      <section className="work">
        <h2>Projects</h2>
        <p className="section__subtitle section__subtitle--work">
          Here are some of my works in the past few months
        </p>
        <ScrollContainer className="scroll-container">
          {works.map((product, inx) => (
            <div key={inx} className="card">
              <img src={product.img} />
              <h3>{product.title}</h3>
              <p>{product.discription}</p>
            </div>
          ))}
        </ScrollContainer>
      </section>
    </div>
  );
}
