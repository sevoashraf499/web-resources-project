/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ i, title, link, description, img }) => {
  return (
    <a href={link} target={"_blank"} rel="noreferrer">
      <motion.div
        className="card  border-b-[5px] bg-[#eebefa] border-b-[#862E9C] flex flex-col rounded-lg  gap-[20px] p-4 shadow-xl h-[30rem] w-[25rem] hover:shadow-4xl "
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="img  self-center">
          <LazyLoadImage
            className="rounded-sm w-[25rem] h-[15rem]"
            src={img}
            alt="img"
            effect="blur"
          />
        </div>

        <div className="content flex flex-col gap-4 items-center">
          <h2 className="text-grape-200 hover:text-grape-300 text-xl font-bold hover:text-orange-500 tracking-wider">
            {title}
          </h2>

          <p className="text-[14px] text-[#402E32] w-4/5 font-inter tracking-wide leading-5 ">
            {description.slice(0, 150) + "..."}
          </p>
        </div>
      </motion.div>
    </a>
  );
};

export default Card;
