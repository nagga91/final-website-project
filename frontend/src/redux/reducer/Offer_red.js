import { GETOFFERS, GETONE, MYOFFERS } from "../ActionType/OfferType";

const initialState = {
    offers: [],
    myoffers: [],
    offer:{}
  }

  const Offersreducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GETOFFERS:
        return { ...state, offers: payload.alloffer};
      case MYOFFERS:
        return { ...state, myoffers: payload };
      case GETONE:
        return {...state,offer:payload.oneoffer}
      default:
        return state;
    }
  };
  export default Offersreducer;