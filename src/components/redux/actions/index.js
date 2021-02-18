import axios from 'axios'

export const SHOWALLCARDSTRUE = 'SHOWALLCARDSTRUE'
export const SHOWALLCARDSFALSE = 'SHOWALLCARDSFALSE'

export const SHOWCARDTRUE = 'SHOWCARDTRUE'
export const SHOWCARDFALSE = 'SHOWCARDFALSE'

export const SHOWERRORTRUE = 'SHOWERRORTRUE'
export const SHOWERRORFALSE = 'SHOWERRORFALSE'

export const SHOWLOADINGTRUE = 'SHOWLOADINGTRUE'
export const SHOWLOADINGFALSE = 'SHOWLOADINGFALSE'

export const INPUTDATA = 'INPUTDATA'

export const SUBMITTEDDATA = 'SUBMITTEDDATA'


export const CLICKEDCARDDATA = 'CLICKEDCARDDATA'

export const ALLCARDSDATA = 'ALLCARDSDATA'




export const setShowAllCardsTrue = () => ({
  type: SHOWALLCARDSTRUE
});

export const setShowAllCardsFalse = () => ({
  type: SHOWALLCARDSFALSE
});





export const setShowCardTrue = () => ({
  type: SHOWCARDTRUE
});


export const setShowCardFalse = () => ({
  type: SHOWCARDFALSE
});





export const setShowErrorTrue = () => ({
  type: SHOWERRORTRUE
});

export const setShowErrorFalse = () => ({
  type: SHOWERRORFALSE
});




export const SetShowLoadTrue = () => ({
  type: SHOWLOADINGTRUE
});

export const SetShowLoadFalse = () => ({
  type: SHOWLOADINGFALSE
});





export const setInputData = (inputData) => ({
  type: INPUTDATA,
  inputData
});



export const setSubmittedData = (submittedData) => ({
  type: SUBMITTEDDATA,
  submittedData
});





export const SetClickedCardData = (requestData) => ({
  type: CLICKEDCARDDATA,
  requestData
});




export const SetAllCardsData = (requestData) => ({
  type: ALLCARDSDATA,
  requestData
});



export const requestMainCardData = (input) => (dispatch) => {
  axios.get(`http://127.0.0.1:5000/weather/${input}`)
    .then((resp) => {

      /* get data to main card */
      dispatch(SetClickedCardData(resp.data))

      /* set message error to false, in case 
      a message error was shown before */
      dispatch(setShowErrorFalse())

      /* set main card to true */
      dispatch(setShowCardTrue())

      /* set all cards to true */
      dispatch(setShowAllCardsTrue())
    })
    .catch(() => {

      /* set main card to false */
      dispatch(setShowCardFalse())

      /* set all cards to true */
      dispatch(setShowAllCardsTrue())

      /* show error message */
      dispatch(setShowErrorTrue())
    }
    )
};


export const requestAllCardData = () => (dispatch) => {
  axios.get(`http://127.0.0.1:5000/weather?max=5`)
    .then((resp) => {
      /* get data to all cards */
      dispatch(SetAllCardsData(resp.data))


    })
    .catch(() => {

      dispatch(setShowCardFalse())

      dispatch(setShowAllCardsTrue())
    }
    )
};






