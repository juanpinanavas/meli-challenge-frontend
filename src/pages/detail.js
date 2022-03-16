import "../styles/pages/detail.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb";
import httpClient from "../utils/http_client";
import ItemService from "../services/item_service";
import Loading from "../components/loading";

const Detail = () => {
  const { id } = useParams();
  const [ data, setData ] = useState({});

  useEffect(() => {
    async function fetchItems() {
      const itemService = new ItemService(httpClient);
      const result = await itemService.getItem(id);
      return result;
    }
    fetchItems().then(setData);
  }, [id]);

	const condition = () => {
		if (data.condition === 'new') {
			return 'Nuevo';
		}
		return 'Usado';
	};

	const itemPriceAmount = () => {
		if (!data.price) {
			return null;
		}
    return `${ data.price.amount.toLocaleString('es-AR', { 
      style : 'currency', 
      currency : data.price.currency,
      maximumFractionDigits: 0,
    }) }`;
  };

	const category = () => {
		return {
			id : data?.category_id,
			name : data?.category_name
		}
	}

	const renderDetail = () => {
		return (
			<>
				<Breadcrumb category={ category() } />
				<section className="detail">
					<div className="detail__container">
						<div className="detail-picture">
							<img src={ data.picture } alt={ data.title } />
						</div>
						<div className="detail-info">
							<div className="detail-info__subtitle">
								<span>{ `${ condition() } - ${ data.sold_quantity } vendidos` }</span>
							</div>
							<h1 className="detail-info__title">{ data.title }</h1>
							<div className="detail-info__price">
								<span className="price-amount">{ itemPriceAmount() }</span>
							</div>
							<div className="detail-info__buy-button">
								<button className="buy-button">Comprar</button>
							</div>
						</div>
					</div>
					<div className="detail-description">
						<h2 className="detail-description__title">Descripción del producto</h2>
						<p className="detail-description__content">{ data.description }</p>
					</div>
				</section>
			</>
		);
	};

	const render = () => {
		return data.id ? renderDetail() : <Loading />;
	};

	return (
		<>
			{ render() }
		</>
	);
};

export default Detail;
