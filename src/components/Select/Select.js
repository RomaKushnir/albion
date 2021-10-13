import { Select } from 'antd';
import styles from './Select.module.scss';

const { Option } = Select;

const DropArrow = <p className={styles.dropArrow}></p>;

const CustomSelect = ({
  options = [],
  isOpen = false,
  label,
  placeholder = 'Select the option',
}) => {
  const selectId = label.replace(/\s/, '-');

  return (
    <div className={styles.selectWrapper}>
      {!!label && <label htmlFor={selectId}>{label}</label>}
      <Select
        id={selectId}
        defaultOpen={isOpen}
        style={{ width: '100%' }}
        placeholder={placeholder}
        suffixIcon={DropArrow}
      >
        {/* {!!options.length && options.map(el => (
         <Option value={options.value}>{options.label}</Option> 
        ))} */}
        <Option value="0">test</Option>
      </Select>
    </div>
  );
};

export default CustomSelect;
