import React from 'react';

const ErrorMessage = ({weather}) => {
  return (
    <div>
      {!weather ? (<div className="w-fit mx-auto p-3 bg-Card">
        <p className="text-white">Please enter the name of a City</p>
      </div>) : null}
    </div>
  );
}

export default ErrorMessage;
