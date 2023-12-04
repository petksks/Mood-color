import React from "react";

const ListItems = ({ colorArray, onDeleteColor }) => {

  const handleDelete = (id) => {
    onDeleteColor(id);
  };

  return (
      <div data-testid="color-container" className="color-container">
        {colorArray &&
          colorArray.map((colorObj) => (
            <div key={colorObj.id} data-testid='color-item' className='color-item'>
             <div
                style={{
                  backgroundColor: colorObj.color,
                  width: "60px",
                  height: "60px",
                }}
                data-testid={`color-box-${colorObj.id}`}
                className='color'
              ></div>
            <span>{colorObj.id}<button onClick={() => handleDelete(colorObj.id)}>x</button></span>
            <h5>{colorObj.color}</h5>
          </div>
          ))}
      </div>
  );
};

export default ListItems;





  


