import { Button } from 'antd';
import { ReactComponent as ReloadIcon } from 'assets/images/reload-ico.svg';
import styles from './ReloadButton.module.scss';

const ReloadButton = ({ text, onUpdate }) => {
  return (
    <Button
      className={styles.btnWrap}
      type="primary"
      size="large"
      icon={<ReloadIcon />}
      onClick={() => onUpdate()}
    >
      {text}
    </Button>
  );
};

export default ReloadButton;
