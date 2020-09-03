import React from "react";
import "../stylesComponents/gifgrid.scss";

const GifGridItem = ({ title, url, id }) => {
  const urlCopy = React.createRef();
  const copyUrl = () => {
    var textArea = document.createElement("textarea");
    textArea.value = urlCopy.current.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  };

  return (
    <div
      onClick={() => {
        copyUrl();
      }}
      className="card animate__animated animate__fadeInUp"
    >
      <img src={url} alt={title} />
      <p>{title}</p>
      <p ref={urlCopy}>{url}</p>
    </div>
  );
};

export default GifGridItem;
