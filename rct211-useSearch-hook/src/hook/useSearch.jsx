import React from "react";

const useSearch = ({ cities, filters }) => {
  return (
    <div style={{backgroundColor:"gray"}}>
      {filters == "" ? (
        <h1>Find Your Country Capital.</h1>
      ) : (
        <div>
          {cities
            .filter((data) => data.country.includes(filters))
            .map((e) => (
              <div style={{textAlign:"left",color:"greenyellow"}}>{e.city}</div>
            ))}
        </div>
      )}
    </div>
  );
};

export default useSearch;
