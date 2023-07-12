import React from "react";

const SchList = ({ semval }) => {
    const subjects=semval[0].subjects
    console.log(subjects)
  return (
    <>
      {subjects &&
        subjects.map((x) => {
          return (
            <>
              <option value={x}>{x}</option>
            </>
          );
        })}
    </>
  );
};

export default SchList;
