import React from "react";

const Homepage = (props) => {
  console.log(props.news);
  return (
    <div className="mx-10 mt-10 h-auto">
      <p className="text-3xl text-indigo-800 cursor-pointer">
        {props.title}
        <div className="w-full grid grid-cols-4 gap-2">
          {props.news.map((item) => (
            <div
              key={item.id}
              className="w-full hover:scale-110 transform translate duration-150 hover:border-slate-400 hover:border-2 hover:z-50 h-auto shadow-md rounded-md bg-slate-300 overflow-hidden"
            >
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <p className="text-lg">{item.author}</p>
            </div>
          ))}
        </div>
      </p>
    </div>
  );
};

export default Homepage;
