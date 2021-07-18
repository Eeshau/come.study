import React from 'react';


const Calendly = (props) => {
  


  return (
    <div style={{ height: "800px" }}>
      <iframe
        src={props.CalendlyLink}
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Calendly;
