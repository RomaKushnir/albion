import { Select } from 'antd';
import styles from './Select.module.scss';
import './Select.scss';

const { Option } = Select;

const CustomSelect = ({
  options = [],
  defaultValue,
  isOpen = false,
  isLoading = false,
  label,
  placeholder = 'Select the option',
  onChange,
}) => {
  const selectId = label.replace(/\s/, '-');

  return (
    <div className={styles.selectWrapper}>
      {!!label && <label htmlFor={selectId}>{label}</label>}
      <Select
        id={selectId}
        defaultOpen={isOpen}
        loading={isLoading}
        style={{ width: '100%' }}
        placeholder={placeholder}
        value={defaultValue}
        onChange={onChange}
      >
        {!!options.length &&
          options.map((el) => (
            <Option key={el.id} value={el.name}>
              {el.name}
            </Option>
          ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
