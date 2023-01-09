import React, {useState} from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Preloader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#CA8A04");

  
  return (
    <div className="preloader">
      <ClimbingBoxLoader
        color={color}
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Preloader;