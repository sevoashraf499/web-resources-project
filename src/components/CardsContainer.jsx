import { useState } from "react";
import Card from "./Card";

import websites from "../database/websites";
import videos from "../database/videos";
import tools from "../database/tools";
import challenges from "../database/challenges";
import books from "../database/books";

// eslint-disable-next-line react/prop-types
const CardsContainer = ({ page }) => {
  const [filter, setFilter] = useState("html");
  let pageData;

  switch (page) {
    case "websites":
      pageData = websites;
      break;
    case "videos":
      pageData = videos;
      break;
    case "tools":
      pageData = tools;
      break;
    case "challenges":
      pageData = challenges;
      break;
    case "books":
      pageData = books;
      break;
    default:
      pageData = [];
      break;
  }

  return (
    <div className="m-10 w-full">
      <div className="flex space-x-6 content-center justify-center mb-10">
        <p
          className={`px-3 py-1 rounded-xl cursor-pointer  tracking-wider border-[#865E9C] ${
            filter === "html" ? "border-[3px]" : ""
          }`}
          onClick={() => setFilter("html")}
        >
          HTML
        </p>
        <p
          className={`px-3 py-1 rounded-xl cursor-pointer tracking-wider border-[#865E9C] ${
            filter === "css" ? "border-[3px]" : ""
          }`}
          onClick={() => setFilter("css")}
        >
          CSS
        </p>
        <p
          className={`px-3 py-1 rounded-xl cursor-pointer tracking-wider border-[#865E9C] ${
            filter === "js" ? "border-[3px]" : ""
          }`}
          onClick={() => setFilter("js")}
        >
          Javascript
        </p>
        <p
          className={`px-3 py-1 rounded-xl cursor-pointer tracking-wider border-[#865E9C] ${
            filter === "react" ? "border-[3px]" : ""
          }`}
          onClick={() => setFilter("react")}
        >
          ReactJS
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-around">
        {pageData.map(
          (res, i) =>
            filter === res.tag && (
              <Card
                className
                key={i}
                title={res.title}
                link={res.link}
                description={res.description}
                i={i}
                img={res.img}
              />
            )
        )}
      </div>
    </div>
  );
};

export default CardsContainer;
