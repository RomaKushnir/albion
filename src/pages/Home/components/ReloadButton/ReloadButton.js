import { Button } from 'antd';
import { ReactComponent as ReloadIcon } from 'assets/images/reload-ico.svg';
import styles from './ReloadButton.module.scss';

const ReloadButton = ({ onDataUpdate }) => {
  return (
    <Button
      className={styles.btnWrap}
      type="primary"
      size="large"
      icon={<ReloadIcon />}
      onClick={() => onDataUpdate()}
    >
      Update Leaderboard
    </Button>
  );
};

export default ReloadButton;
