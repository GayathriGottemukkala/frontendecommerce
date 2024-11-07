import React, { useState } from 'react';

import item1 from "../assests/item1.jpg"
import item2 from "../assests/item2.jpg"
import item3 from "../assests/item3.jpg"
import item4 from "../assests/item4.jpg"
import item5 from "../assests/item5.jpg"
import item6 from "../assests/item6.jpg"
import rating from "../assests/rating.png"
import { MdCurrencyRupee } from "react-icons/md";

const CardPagination = () => {
  // Sample card data
  const cardData = [
    { id: 1, title: 'Omron Body Composition Meter', description: 'Description for Card 1' ,imggiv:item1,price:1200},
    { id: 2, title: 'Omron Body Composition Meter', description: 'Description for Card 2',imggiv:item2 ,price:1300},
    { id: 3, title: 'Omron Body Composition Meter', description: 'Description for Card 3',imggiv:item3 ,price:1500},
    { id: 4, title: 'Omron Body Composition Meter', description: 'Description for Card 4',imggiv:item4 ,price:1700},
    { id: 5, title: 'Omron Body Composition Meter', description: 'Description for Card 5' ,imggiv:item5,price:2000},
    { id: 6, title: 'Omron Body Composition Meter', description: 'Description for Card 6',imggiv:item6,price:2200},
    { id: 7, title: 'Omron Body Composition Meter', description: 'Description for Card 7',imggiv:item3,price:2500 },
    { id: 8, title: 'Omron Body Composition Meter', description: 'Description for Card 8' ,imggiv:item4,price:2600},
    { id: 9, title: 'Omron Body Composition Meter', description: 'Description for Card 9',imggiv:item6,price:3000},
  ];

  const cardsPerPage = 3;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change
  const changePage = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Slice the data to get only the current page's 3 cards
  const currentCards = cardData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div>
      <div className="card-container" style={{ display: 'flex', gap: '20px' }}>
        {currentCards.map((card) => (
          <div key={card.id} className="card" style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
            <img className='imggiv' src={card.imggiv} alt={card.id}/>
            <h3 style={{margin:"0px"}}>{card.title}</h3>
            <h4><MdCurrencyRupee /> {card.price}</h4>
            <img src={rating}/>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="pagination" style={{ marginTop: '20px' }}>
        <button
          onClick={() => changePage('prev')}
          disabled={currentPage === 1}
          style={{ padding: '10px 20px', marginRight: '10px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
        >
          ←
        </button>
        <button
          onClick={() => changePage('next')}
          disabled={currentPage === totalPages}
          style={{ padding: '10px 20px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default CardPagination;
