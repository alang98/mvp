import React from "react";

var Modal = (props) => {
  if (!props.show) {
    return null;
  }
  if (props.information[0] === 'food') {
    return (
      <div onClick={props.onClick}>
        <div id='related-modal' className='related-modal'>
          <div className='related-modal-content'>
            <div id="informationContainer">
              <p>{props.information[1]}</p>
              <p>{props.information[2]}</p>
              <ul>
                {props.information[3].map((ingredient) => {
                  return (<li key={ingredient}>{ingredient}</li>)
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div onClick={props.onClick}>
      <div id='related-modal' className='related-modal'>
        <div className='related-modal-content'>
          <div id="informationContainer">
          <p>{props.information[0]}</p>
          <p>{props.information[1]}</p>
          <p>{props.information[2]}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;