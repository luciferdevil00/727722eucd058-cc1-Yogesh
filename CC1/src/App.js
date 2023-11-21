import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="shopping-cart">
      <div className="title">
        Shopping Bag
      </div>

      <div className="item">
        <div className="buttons">
          <span className="delete-btn"></span>
          <span className="like-btn"></span>
        </div>

        <div className="image">
          <img src="https://m.media-amazon.com/images/I/91xorHXzWbL._AC_UF1000,1000_QL80_.jpg" width="80" height="90" alt="" />
        </div>

        <div className="description">
          <span>  Javascript</span>
          <span> Book</span>
        </div>

        <div className="quantity">
          <button className="plus-btn" type="button" onClick={handleIncrement}>
            <img src="plus.svg" alt="" />+
          </button>
          <input type="text" name="name" value={count} readOnly />
          <button className="minus-btn" type="button" onClick={handleDecrement}>
            <img src="minus.svg" alt="" />-
          </button>
        </div>

        <div className="total-price">999/-</div>
      </div>

          <div className="item">
            <div className="buttons">
              <span className="delete-btn"></span>
              <span className="like-btn"></span>
            </div>
    
            <div className="image">
            <img src="https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" width="80" height="90" alt="" />

            </div>
    
            <div className="description">
              <span>Macbook</span>
              <span>Air</span>
              <span> Black</span>
            </div>
            <div className="quantity">
            <button className="plus-btn" type="button" onClick={handleIncrement}>
              <img src="plus.svg" alt="" />+
            </button>
            <input type="text" name="name" value={count} readOnly />
            <button className="minus-btn" type="button" onClick={handleDecrement}>
              <img src="minus.svg" alt="" />-
            </button>
          </div>
    
           
    
            <div className="total-price">800000/-</div>
          </div>
    

          <div className="item">
            <div className="buttons">
              <span className="delete-btn"></span>
              <span className="like-btn"></span>
            </div>
    
            <div className="image">
            <img src="https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww" width="80" height="90" alt="" /> 
            </div>
    
            <div className="description">
              <span>Iphone</span>
              <span>14</span>
              <span> Plus</span>
            </div>
    
            <div className="quantity">
            <button className="plus-btn" type="button" onClick={handleIncrement}>
              <img src="plus.svg" alt="" />+
            </button>
            <input type="text" name="name" value={count} readOnly />
            <button className="minus-btn" type="button" onClick={handleDecrement}>
              <img src="minus.svg" alt="" />-
            </button>
          </div>
    
            <div className="total-price">349999/-</div>
          </div>
        </div>
      );
    };
    
   

export default App;
