import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem.jsx";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

export const GifGrid = ({ categories }) => {
  // const [images, setImage] = useState([]);

  const { data, loading } = useFetchGifs(categories);
  //{data:images}
  //significa que crea una copia renombra de data por images
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h3>{categories}</h3>
      {loading && (
        <p className="animate__animated animate__flipOutY">'Cargando...'</p>
      )}
      <div
        onClick={() => {
          handleClick();
        }}
        className="card-grid"
      >
        {data.map((img, index) => {
          return <GifGridItem key={index} {...img} />;
        })}
      </div>
      {!data.length && <h1>No hay imagenes que mostrar</h1>}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Copiado al porta papeles"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              cerrar
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

GifGrid.propTypes = {
  categories: PropTypes.string,
};
