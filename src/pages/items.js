import '../styles/pages/items.scss';
import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb";
import ItemsList from "../components/items_list";
import httpClient from "../utils/http_client";
import ItemService from "../services/item_service";
import Loading from "../components/loading.js";

const Items = () => {
  const [ data, setData] = useState({});
  const [ searchParams ] = useSearchParams();
  const query = searchParams.get("q");
  
  useEffect(() => {
    async function fetchItems() {
      const itemService = new ItemService(httpClient);
      const result = await itemService.searchItem(query);
      return result;
    }
    fetchItems().then(setData);
  }, [query]);

  const renderItemsList = () => {
    if (!query) {
      return null;
    }
    if (data.items && query) {
      return <ItemsList items={data.items} />;
    }
    return <Loading />;
  };

  return (
    <>
      <Breadcrumb category={ data?.max_results_category }/>
      <section className="items">
        { renderItemsList() }
      </section>
      <Outlet />
    </>
  );
};

export default Items;
