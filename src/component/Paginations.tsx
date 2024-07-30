import { FC } from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handleFirstClick = () => onPageChange(1);
  const handlePrevClick = () => onPageChange(currentPage - 1);
  const handleNextClick = () => onPageChange(currentPage + 1);
  const handleLastClick = () => onPageChange(totalPages);

  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= halfVisiblePages) {
      startPage = 1;
      endPage = maxVisiblePages;
    } else if (currentPage + halfVisiblePages >= totalPages) {
      startPage = totalPages - maxVisiblePages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfVisiblePages;
      endPage = currentPage + halfVisiblePages;
    }

    startPage = Math.max(startPage, 1);
    endPage = Math.min(endPage, totalPages);

    if (startPage > 1) {
      items.push(<BootstrapPagination.Item key={1} onClick={() => onPageChange(1)}>1</BootstrapPagination.Item>);
      if (startPage > 2) {
        items.push(<BootstrapPagination.Ellipsis key="start-ellipsis" disabled />);
      }
    }

    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <BootstrapPagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </BootstrapPagination.Item>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<BootstrapPagination.Ellipsis key="end-ellipsis" disabled />);
      }
      items.push(<BootstrapPagination.Item key={totalPages} onClick={() => onPageChange(totalPages)}>{totalPages}</BootstrapPagination.Item>);
    }

    return items;
  };

  return (
    <BootstrapPagination>
      <BootstrapPagination.First onClick={handleFirstClick} disabled={currentPage === 1} />
      <BootstrapPagination.Prev onClick={handlePrevClick} disabled={currentPage === 1} />
      {renderPaginationItems()}
      <BootstrapPagination.Next onClick={handleNextClick} disabled={currentPage === totalPages} />
      <BootstrapPagination.Last onClick={handleLastClick} disabled={currentPage === totalPages} />
    </BootstrapPagination>
  );
};

export default Pagination;
