import { memo } from 'react';
import { HouseBookSection } from './houseBookYearSection';

type Props = {
  section: HouseBookSection;
};

const HouseBookListSection = memo<Props>(({ section }) => (
  <div>
    <div>
      {section.year}年{section.month}月
    </div>
  </div>
));

export { HouseBookListSection };
