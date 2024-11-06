import s from "./SearchBox.module.css";

const SearchBox = ({ handleSearch, search }) => {
  return (
    <div className={s.box}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        className={s.input}
        id="search"
      />
    </div>
  );
};

export default SearchBox;
