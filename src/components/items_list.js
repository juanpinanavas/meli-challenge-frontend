import "../styles/components/items_list.scss";
import Item from "./item.js"

const ItemsList = (props) => {
  const { items } = props;

  const render = () => {
    return (
      <>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </>
    );
  }
  
  return (
    <section className="items-list">
      { render() }
    </section>
  );
};

export default ItemsList;
