import { memo } from 'react';
import { Option, useSelect, NoSelectOption } from './useSelect';
import styles from './PrimarySelect.module.scss';

type Props = {
  defaultValue?: string;
  options?: Option[];
};

const PrimarySelect = memo<Props>(
  ({ defaultValue = NoSelectOption.Value, options }) => {
    const { value, label, isOpenMenu, openMenu, closeMenu } = useSelect({
      defaultValue,
      options,
    });
    if (!options) {
      return null;
    }

    return (
      <div data-value={value}>
        <button
          type="button"
          className={`${styles.select}, ${styles['select-block']}`}
          onClick={() => {
            openMenu();
          }}
        >
          {label}
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
            className={`${styles['menu-block']} ${styles['menu-block-skin']}`}
          >
            {options.map((option) => (
              <button type="button" data-value={option.value}>
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
