import React, { useEffect, useState } from 'react' 
import API from '../../utils/API'
import Container from '../../components/Container'
import './style.css'

const Search = () => {
  const [search, setSearch] = useState('');
  const [cardList, setCardList] = useState([]);

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.getCardList(search)
      .then(res => {
        setCardList(res.data.data)
      })
  }

  useEffect(()=>{
    console.log(cardList)
  }, [cardList])

  return(
    <>
      <form>
        <div className="field has-addons search__bar">
          <div className="control">
            <input 
              className="input" 
              type="text"
              value={search}
              onChange={handleInputChange}
            />
          </div>
          <div className="control">
            <button 
              className="button is-info"
              type="submit"
              onClick={handleFormSubmit}>
              Search
            </button>
          </div>
        </div>
      </form>

      <section>
        <Container>

        <div className="columns is-multiline is-mobile">
          {cardList.map(card => {
            return (
              <div className="column is-one-fifth-desktop is-half-mobile" key={card.id}>
                <div className="card">
                  <div className="card-image">
                    <figure>
                      <img alt={card.name} src={card.images.large} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      Lowest Ask
                      <p className="card__price">${card.cardmarket.prices.lowPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })} 
        </div>

        </Container>
      </section>
    </>
  )
}

export default Search;