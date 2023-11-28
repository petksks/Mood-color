import React from "react";

const ListItems = ({ colorArray }) => {
  return (
    <div data-testid="color-container">
      <div>
        {colorArray &&
          colorArray.map((colorObj) => (
            <div key={colorObj.id} data-testid='color-item'>
           <div
    style={{
      backgroundColor: colorObj.color,
      width: "50px",
      height: "50px",
    }}
    data-testid={`color-box-${colorObj.id}`} 
  ></div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default ListItems;





  


