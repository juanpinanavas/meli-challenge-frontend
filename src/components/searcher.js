import "../styles/components/searcher.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searcher = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/items?q=${query}`);
  };

  return (
    <form className="searcher">
      <input type="text" placeholder="Nunca dejes de buscar" className="searcher__input" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit" onClick={handleSubmit} className="searcher__button" />
    </form>
  );
};

export default Searcher;
