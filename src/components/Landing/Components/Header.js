import { Fade} from "@material-ui/core";
import React from "react";

import "./Header.css";

const Header = (props) => {
  let date = new Date().getHours();
  let greeting = (date>=6 && date<=18)? "Buon Giorno ☀" : "Buon Serata 🌟";
  return (
    <React.Fragment>
      <div className="text-center text-md-left  mt-md-3">
        <Fade in={true} timeout={700}>
          <h3 className="Header-text">{greeting}</h3>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default Header;
