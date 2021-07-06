const INITIAL_STATE = {
data:[
    {
      questions:'HTML stands for?',
      option:['HYPER TEXT MARKUP LANGUAGE','PROGRAMING LANGUAGE','MARKUP LANGUAGE'],
      correctans:'HYPER TEXT MARKUP LANGUAGE',
    },
    {
      questions:'CSS stands for?',
      option:['CASCADING STYLING SHEET','PROGRAMING LANGUAGE','MARKUP LANGUAGE'],
      correctans:'CASCADING STYLING SHEET',
    },
    {
      questions:'XML stands for?',
      option:['extensible markup language','PROGRAMING LANGUAGE','MARKUP LANGUAGE'],
      correctans:'extensible markup language',
    },
    {
      questions:'PHP stands for?',
      option:['PHP: Hypertext Preprocessor','PROGRAMING LANGUAGE','MARKUP LANGUAGE'],
      correctans:'PHP: Hypertext Preprocessor',
    },
  ]
}


const reducer = (state = INITIAL_STATE) => {
    return state
}

export default reducer;