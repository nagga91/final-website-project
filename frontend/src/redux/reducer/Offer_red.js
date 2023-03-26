import { GETOFFERS, MYOFFERS } from "../ActionType/OfferType";

const initialState = {
    offers: [],
    myoffers: []
  }

  const Offersreducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GETOFFERS:
        return { ...state, offers: payload.alloffer};
      case MYOFFERS:
        return { ...state, myoffers: payload };
  
      default:
        return state;
    }
  };
  export default Offersreducer;