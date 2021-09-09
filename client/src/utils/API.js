import axios from 'axios';
let config = {'Authorization': process.env.REACT_APP_API_KEY};

const API = {
  getCardList: function(card) {
    return axios.get("https://api.pokemontcg.io/v2/cards?q=name:" + card, config)
  },
  getSetList: function() {
    return axios.get("https://api.pokemontcg.io/v2/sets")
  }
}

export default API;