import React, { useState } from "react";

const App = () => {
  // states
  const [images, setImages] = useState([
    {
      path: "https://tse1.mm.bing.net/th?id=OIP.YIre5HGHiqBa7DCmrF4KwwHaJQ&pid=Api&P=0&h=220",
    },
    {
      path: "https://jooinn.com/images/portrait-of-man-27.jpg",
    },
    {
      path: "https://i.pinimg.com/originals/a0/60/be/a060be70906ff02fea00add1144e4ad7.jpg",
    },
    {
      path: "https://i.pinimg.com/originals/44/07/02/4407023dcebcfba71ae15741367988ea.jpg",
    },
    {
      path: "https://images.alphacoders.com/752/752287.jpg",
    },
  ]);
  return (
    <div>
      <div className="avatars">
        {images.map((imageItem) => {
          return (
            <img key={imageItem.path} src={imageItem.path} className="avatar" />
          );
        })}
      </div>
    </div>
  );
};

export default App;
