// import React, { useContext } from "react";
// import { ProductContext } from "../../context/ProductContextData";

// export default function Pagenation() {
//   const { pageNumber, setPageNumber, totalPages } = useContext(ProductContext);

//   const handlePageNumberChange = (page) => {
//     setPageNumber(page);
//   };

//   return (
//     <div className="pagination">
//       <button
//         className="previous-page"
//         disabled={pageNumber === 1}
//         onClick={() => handlePageNumberChange(pageNumber - 1)}
//       >
//         {" "}
//         Previous
//       </button>
//       <span className="page-number">
//         Page {pageNumber} of {totalPages}
//       </span>

//       <button
//         className="next-page"
//         onClick={() => handlePageNumberChange(pageNumber + 1)}
//         disabled={pageNumber === totalPages}
//       >
//         {" "}
//         Next
//       </button>
//     </div>
//   );
// }


// using material UI 
import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContextData";
import { Box, Button, Typography, Stack } from "@mui/material";

export default function Pagenation() {
  const { pageNumber, setPageNumber, totalPages } = useContext(ProductContext);

  const handlePageNumberChange = (page) => {
    setPageNumber(page);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3, // Adjust spacing between the products and pagination
      }}
    >
      {/* Pagination Section */}
      <Stack direction="row" spacing={2} alignItems="center">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handlePageNumberChange(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Previous
        </Button>

        <Typography variant="body1">
          Page {pageNumber} of {totalPages}
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => handlePageNumberChange(pageNumber + 1)}
          disabled={pageNumber === totalPages}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
}
