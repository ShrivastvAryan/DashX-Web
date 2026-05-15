import { Check, ChevronLeft, ChevronsLeft, ChevronsRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

export const Pagination = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
  siblingCount = 1,
  className = "",
}: PaginationProps) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const totalPageCount = Math.ceil(totalCount / pageSize);

  if (currentPage > totalPageCount) {
    onPageChange(totalPageCount);
  }

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  const startPage = Math.max(firstPageIndex, currentPage - siblingCount);
  const endPage = Math.min(lastPageIndex, currentPage + siblingCount);

  const shouldShowLeftDots = startPage > firstPageIndex;
  const shouldShowRightDots = endPage < lastPageIndex;

  const paginationRange = range(startPage, endPage);

  return (
    <div className={`flex items-center justify-center mt-4 mb-4${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === firstPageIndex}
        className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronsLeft />
      </button>

      {shouldShowLeftDots && (
        <>
          <button
            onClick={() => onPageChange(firstPageIndex)}
            className="px-3 py-1 rounded-md hover:bg-gray-100"
          >
            {firstPageIndex}
          </button>
          <span>...</span>
        </>
      )}

      {paginationRange.map((pageNumber) => {
        if (pageNumber === currentPage) {
          return (
            <button
              key={pageNumber}
              className="px-3 py-1 rounded-md bg-blue-500 text-white"
            >
              {pageNumber}
            </button>
          );
        }

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className="px-3 py-1 rounded-md hover:bg-gray-100"
          >
            {pageNumber}
          </button>
        );
      })}

      {shouldShowRightDots && (
        <>
          <span>...</span>
          <button
            onClick={() => onPageChange(lastPageIndex)}
            className="px-3 py-1 rounded-md hover:bg-gray-100"
          >
            {lastPageIndex}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === lastPageIndex}
        className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronsRight />
      </button>
    </div>
  );
};
