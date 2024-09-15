import { memo } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import { Option, useSelect, NoSelectOption } from './useSelect';
import styles from './PrimarySelect.module.scss';

type Props = {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options?: Option[];
};

const PrimarySelect = memo<Props>(
  ({ value, defaultValue = NoSelectOption.Value, onChange, options }) => {
    const {
      selectRef,
      menuRef,
      currentValue,
      label,
      selectOption,
      isOpenMenu,
      openMenu,
      closeMenu,
    } = useSelect({
      value,
      defaultValue,
      options,
    });

    const { themeColor } = useThemeContext();

    if (!options) {
      return null;
    }

    return (
      <div
        data-value={currentValue}
        className={`${styles['select-container']}`}
      >
        <button
          ref={selectRef}
          type="button"
          className={`${styles.select} ${styles[themeColor]} ${
            isOpenMenu ? styles.open : ''
          }`}
          onClick={() => {
            openMenu();
          }}
        >
          <div
            className={`${styles['select-label']} ${styles['select-label-skin']}`}
          >
            {label}
          </div>
          <div className={`${styles.triangle}`} />
        </button>

        <button
          type="button"
          className={`${styles['menu-overlay']} ${
            styles['menu-overlay-skin']
          } ${isOpenMenu ? '' : styles.close}`}
          onClick={() => {
            closeMenu();
          }}
        >
          <div
            className={`${styles['menu-block']} ${styles['menu-block-skin']} ${styles[themeColor]}`}
            ref={menuRef}
          >
            {options.map((option) => (
              <button
                className={`${styles['menu-item']} ${styles['menu-item-skin']} ${styles[themeColor]}`}
                type="button"
                data-value={option.value}
                onClick={(_) => {
                  selectOption(option.value);
                  onChange?.(option.value);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </button>
      </div>
    );
  },
);

export { PrimarySelect };
