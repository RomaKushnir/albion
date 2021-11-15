import { Pagination } from 'antd';
import './Pagination.scss';

const MyPagination = ({ onPageChange, total, currentPage }) => {
  return (
    <Pagination
      className="paginationContainer"
      total={total}
      current={currentPage}
      // showSizeChanger={false}
      pageSizeOptions={[10, 25, 50]}
      onChange={(page, size) =>
        onPageChange({ page, size, offset: (page - 1) * size })
      }
    />
  );
};

export default MyPagination;
