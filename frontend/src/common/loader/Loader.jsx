import React, { useContext, useEffect } from "react";
import { LoaderContext } from "./LoaderMiddelware";
import CircularProgress from "@mui/material/CircularProgress";
import "./loader.css";

const Loader = ({ children }) => {
  const { loading } = useContext(LoaderContext);


      console.log(children,"kiiii.........");
  

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader-container" >

            <CircularProgress />
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default Loader;
