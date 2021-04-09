import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChangeEvent }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChangeEvent}
  ></input>
);
