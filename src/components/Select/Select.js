import { Select } from 'antd';
import styles from './Select.module.scss';
import './Select.style.scss';

const { Option } = Select;

const CustomSelect = ({
  options = [],
  defaultValue,
  isOpen,
  isLoading = false,
  label,
  className,
  placeholder = 'Select the option',
  onSelect,
  onFocus,
  onBlur,
  onDropdownVisibleChange,
}) => {
  const selectId = label.replace(/\s/, '-');

  return (
    <div className={styles.selectWrapper}>
      {!!label && <label htmlFor={selectId}>{label}</label>}
      <Select
        id={selectId}
        className={className}
        open={isOpen}
        loading={isLoading}
        style={{ width: '100%' }}
        placeholder={placeholder}
        value={defaultValue}
        onSelect={onSelect}
        onFocus={onFocus}
        onBlur={onBlur}
        onDropdownVisibleChange={onDropdownVisibleChange}
      >
        {!!options.length &&
          options.map((el) => (
            <Option key={el.id} value={el.id}>
              {el.name}
            </Option>
          ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
