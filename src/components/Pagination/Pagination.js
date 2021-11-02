import { Pagination } from 'antd';
import './Pagination.scss';

const MyPagination = ({ onPageChange, total }) => {
  return (
    <Pagination
      className="paginationContainer"
      total={total}
      // showSizeChanger={false}
      pageSizeOptions={[10, 25, 50]}
      onChange={(page, size) =>
        onPageChange({ page, size, offset: (page - 1) * size })
      }
    />
  );
};

export default MyPagination;
