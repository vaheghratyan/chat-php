import React from "react";
import PropTypes from "prop-types";
import readed from "../../assets/img/readed.svg";
import noReaded from "../../assets/img/noReaded.svg";

const IconReaded = ({ isMe, isReaded }) =>
  isMe &&
  (isReaded ? (
    <img src={readed} alt="Readed icon" className="message__icon-readed" />
  ) : (
    <img
      src={noReaded}
      alt="Not readed icon"
      className="message__icon-readed message__icon-readed--no"
    />
  ));

IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default IconReaded;
