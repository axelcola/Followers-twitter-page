import { FiSearch } from "react-icons/fi";
import "./searcher.css";

export default function Searcher() {
  return (
    <>
      <div className="Searcher">
        <div className="icon">
          <FiSearch size={20} />
        </div>
        <input
          type="text"
          className="input-box"
          placeholder="Search Twitter"
        ></input>
      </div>
    </>
  );
}
