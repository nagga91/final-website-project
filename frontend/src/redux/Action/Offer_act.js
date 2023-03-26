import axios from 'axios'
import { GETOFFERS,MYOFFERS } from '../ActionType/OfferType'

//all offers
export const get_offers = () => async (dispatch) => {
    try {
      const res = await axios.get("/offer/alloffers");
      dispatch({ type: GETOFFERS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
//company offers
export const my_offers = () => async (dispatch) => {
    const config = {
      headers: {
        token: localStorage.getItem("token")
      }
    }
    try {
      const res = await axios.get("/offer/myoffers", config);
      dispatch({ type: MYOFFERS, payload: res.data.myoffers });
    } catch (error) {
      console.log(error);
    }
  };
  //add offer
  export const add_offer = (data) => async (dispatch) => {
    const config = {
      headers: {
        token: localStorage.getItem("token")
      }
    }
    try {
      await axios.post("/offer/addoffer", data, config);
      dispatch(get_offers());
    } catch (error) {
      console.log(error);
    }
  };
  //update offer
  export const update_offer = (id, data) => async (dispatch) => {
    try {
      await axios.put(`/offer/updateoffer/${id}`, data);
      dispatch(get_offers());
    } catch (error) {
      console.log(error);
    }
  };
  //delete offer
  export const delete_offer = (id) => async (dispatch) => {
    try {
      await axios.delete(`/offer/deleteoffer/${id}`);
      dispatch(get_offers());
    } catch (error) {
      console.log(error);
    }
  };
