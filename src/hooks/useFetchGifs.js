//use al inicio significa que es un hook los hooks no son mas que funciones

import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGif.js";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifService(category)
    }, [category])
    //mounted solo se ejecuta una sola vez cuando el componente se monta
    //categories como dependencia significa que el codigo se estara ejecutando n cantidad de veces mientras cambie de estado la prop
    //los use effects no pueden ser async

    const getGifService = async (category) => {
        try {
            let res = await getGif(category);
            setState({
                data: res,
                loading: false
            });
        } catch (e) {
            console.log(e);
        }
    };


    return state //{data:[], loading: true}
}