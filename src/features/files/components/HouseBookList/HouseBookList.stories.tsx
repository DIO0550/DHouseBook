// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable react/destructuring-assignment */
// /* eslint-disable react/jsx-props-no-spreading */
// import { Meta, StoryObj } from '@storybook/react';

// import { ThemeProvider, BookThemeColor } from '@/components/Providers';
// import { HouseBookFile } from '@/features/files/utils/houseBookFile';
// import { HouseBookList } from './HouseBookList';

// const meta: Meta<typeof HouseBookList> = {
//   title: 'features/files/components/HouseBookList',
//   component: HouseBookList,
//   decorators: [
//     (story) => (
//       <ThemeProvider initialValue={BookThemeColor.red}>{story()}</ThemeProvider>
//     ),
//   ],
//   render: (args) => <HouseBookList {...args} />,
// };

// export default meta;

// type Story = StoryObj<typeof HouseBookList>;

// const TestData: HouseBookFile[] = [
//   {
//     id: 'データ１',
//     filePath: '~/Data/File/File1.json',
//     houseBook: {
//       year: 2021,
//       month: 9,
//       items: [
//         {
//           id: '12345',
//           name: 'sample',
//           price: 12314,
//           type: '日常品',
//           date: '12月9日',
//         },
//       ],
//     },
//     isDirty: false,
//   },
//   {
//     id: 'データ２',
//     filePath: '~/Data/File/File2.json',
//     houseBook: {
//       year: 2022,
//       month: 9,
//       items: [
//         {
//           id: '12345',
//           name: 'sample',
//           price: 12314,
//           type: '日常品',
//           date: '12月9日',
//         },
//       ],
//     },
//     isDirty: false,
//   },
// ];

// export const Default: Story = {
//   args: {
//     houseBookFiles: TestData,
//   },
// };
