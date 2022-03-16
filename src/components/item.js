import '../styles/components/item.scss';
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();

  const freeShipping = () => {
    if (item.free_shipping) {
      return (
        <img className="free-shipping-icon" alt="Envío gratis" src={ require('../assets/img/ic_shipping.png') } />
      );
    }
    return null;
  };

  const itemPriceAmount = () => {
    return `${ item.price.amount.toLocaleString('es-AR', { 
      style : 'currency', 
      currency : item.price.currency,
      maximumFractionDigits: 0,
    }) }`;
  };

  const handleClick = () => {
    navigate(`/items/${ item.id }`);
  };

  return (
    <>
      <div className="item" onClick={ handleClick }>
        <div className="item-picture">
          <img src={ item.picture } alt={ item.title } />
        </div>
        <div className="item-info">
          <div className="item-info__price">
            <span className="item-info__price-amount">{ itemPriceAmount() }</span>
            <div className="item-info__shipping">{ freeShipping() }</div>
          </div>
          <h2 className="item-info__title">{ item.title }</h2>
        </div>
        <div className="item-address">
          <span className="item-address__state">{ item.state_name }</span>
        </div>
      </div>
      <hr className="separator" />
    </>
  );
}

export default Item;