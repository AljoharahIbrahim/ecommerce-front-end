import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContextData";

export default function Pagenation() {
  const { pageNumber, setPageNumber, totalPages } = useContext(ProductContext);

  const handlePageNumberChange = (page) => {
    setPageNumber(page);
  };

  return (
    <div className="pagination">
      <button
        className="previous-page"
        disabled={pageNumber === 1}
        onClick={() => handlePageNumberChange(pageNumber - 1)}
      >
        {" "}
        Previous
      </button>
      <span className="page-number">
        Page {pageNumber} of {totalPages}
      </span>

      <button
        className="next-page"
        onClick={() => handlePageNumberChange(pageNumber + 1)}
        disabled={pageNumber === totalPages}
      >
        {" "}
        Next
      </button>
    </div>
  );
}
