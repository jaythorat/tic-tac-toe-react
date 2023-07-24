import React from "react";


const Square = (props) => {
  const style = {border:"1px solid",
   height:"100px", 
   width:"100%",
   display:"flex",
   justifyContent:"center",
   alignItems:"center"
  }
  return (

    <div onClick={props.onClick} 
    style={style}
    className="square"
    >
        <h5>{props.value}</h5>
    </div>
  );
};

export default Square;