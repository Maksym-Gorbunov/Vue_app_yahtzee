const state = {
  // my_cursor: {
  //   current: 0,
  //   element: '',
    
  // },
  dices: [
    {
      id: 1,
      value: 0,
      element: '',
      place: 'home',
      top_home: '65%',
      top_board: '',
      rotated: ''
    },
    {
      id: 2,
      value: 0,
      element: '',
      place: 'home',
      top_home: '65%',
      top_board: '',
      rotated: ''
    },
    {
      id: 3,
      value: 0,
      element: '',
      place: 'home',
      top_home: '65%',
      top_board: '',
      rotated: ''
    },
    {
      id: 4,
      value: 0,
      element: '',
      place: 'home',
      top_home: '65%',
      top_board: '',
      rotated: ''
    },
    {
      id: 5,
      value: 0,
      element: '',
      place: 'home',
      top_home: '65%',
      top_board: '',
      rotated: ''
    }
  ],
  
  /* Items */
  items: [
    { 
      id: 0,
      possible: 0,
      combination: "ones",
      poings: 0,
      max: 5,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 1,
      possible: 0,
      combination: "twos",
      poings: 0,
      max: 10,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 2,
      possible: 0,
      combination: "threes",
      poings: 0,
      max: 15,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 3,
      possible: 0,
      combination: "fours",
      poings: 0,
      max: 20,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 4,
      possible: 0,
      combination: "fives",
      poings: 0,
      max: 25,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 5,
      possible: 0,
      combination: "sixes",
      poings: 0,
      max: 30,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 6,
      possible: 0,
      combination: "sum",
      poings: 0,
      max: 105,
      story: '',
      used: false,
      clickable: false,
      selected: false
    },
    {
      id: 7,
      possible: 0,
      combination: "bonus",
      poings: 0,
      max: 135,
      story: '',
      used: false,
      clickable: false,
      selected: false
    },
    {
      id: 8,
      possible: 0,
      combination: "three of kind",
      poings: 0,
      max: 30,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 9,
      possible: 0,
      combination: "four of kind",
      poings: 0,
      max: 30,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 10,
      possible: 0,
      combination: "full house",
      poings: 0,
      max: 25,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 11,
      possible: 0,
      combination: "small straight",
      poings: 0,
      max: 30,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 12,
      possible: 0,
      combination: "large straight",
      poings: 0,
      max: 40,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 13,
      possible: 0,
      combination: "chance",
      poings: 0,
      max: 30,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 14,
      possible: 0,
      combination: "yahtzee",
      poings: 0,
      max: 50,
      story: '',
      used: false,
      clickable: true,
      selected: false
    },
    {
      id: 15,
      possible: 0,
      combination: "total score",
      poings: 0,
      max: 475,
      story: '',
      used: false,
      clickable: false,
      selected: false
    }
  ]
};

const getters = {
  dices: state => state.dices,
  items: state => state.items,
  // my_cursor: state => state.my_cursor,
  // data: state => state.data
};

const actions = {
};

const mutations = {
  sendHome(state) {
    for(let i=0; i<state.dices.length ; i++){
      state.dices[i].element.style.top = state.dices[i].top_home
      state.dices[i].element.style.left = 15*(i+1)+'%'
      // state.dices[i].element.style.left = 17*(i+1)+'%'
      state.dices[i].element.style.transform = 'rotate(0deg)'
    }
  },
  initDices(state) {
    for(let i=0; i<state.dices.length ; i++){
      state.dices[i].value = i+1
      state.dices[i].element = document.getElementById('dice'+i+1)
    }
  },
  setElement(state, elementData) {
    state.dices[elementData[0]].element = elementData[1]
  },
  setCursorElement(state, element) {
    state.cursor.element = element
  },
  mixDicePosition(state) {
    for(let i=0; i<5; i++){
      if(state.dices[i].place == 'board' ){
        state.dices[i].element.style.top = (35 - Math.floor(Math.random() * 20) + 1) + '%'
        state.dices[i].rotated = Math.floor(Math.random() * 180)
        state.dices[i].element.style.transform = 'rotate(' + state.dices[i].rotated + 'deg)' 
      }
    }
  },
  setPlace(state, place){
    for(let dice of state.dices){
      dice.place = place 
    }
  },
  randomize(state) {
    for(let dice of state.dices){
      if(dice.place === 'board'){
        dice.value = Math.floor(Math.random() * 6) + 1 
      }
    }
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};
