import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './Spinner.module.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Spinner;
