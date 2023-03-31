import axios from "axios";
import React, { useEffect, useState } from "react";

function PostDetail() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  const [view, setView] = useState(1);

  const clickHandler = () => {
    setView(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${view}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [view]);

  return (
    <div>
      <input
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={clickHandler}>Submit</button>
      <h3>{data.title}</h3>
    </div>
  );
}

export default PostDetail;
