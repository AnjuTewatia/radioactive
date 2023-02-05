import React from "react";

const Pagination = ({handlepage,page}) => {
  const previous = (
    <button disabled={page < 2} onClick={() => handlepage(-1)}>
      prev
    </button>
  );

  const current = <button>current={page}</button>;

  const Next = <button onClick={() => handlepage(1)}>prev</button>;

  return (
    <>
      <div>
        {previous}
        {current}
        {Next}
      </div>
    </>
  );
};

export default Pagination;
