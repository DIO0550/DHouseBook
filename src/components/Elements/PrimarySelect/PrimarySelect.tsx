import { memo } from 'react';
import { Option, useSelect, NoSelectValue } from './useSelect';

type Props = {
  defaultValue?: string;
  options?: Option[];
};

const PrimarySelect = memo<Props>(
  ({ defaultValue = NoSelectValue, options }) => {
    const { value, isOpenMenu } = useSelect({
      defaultValue,
      options,
    });
    if (!options) {
      return null;
    }

    return (
      <div>
        <div>{value}</div>
        {isOpenMenu && (
          <div>
            {options.map((option) => (
              <div data-value={option.value}>{option.label}</div>
            ))}
          </div>
        )}
      </div>
    );
  },
);

export { PrimarySelect };
