// import { MaskInputRegExp } from './maskInput';

// describe('MaskInputRegExp', () => {
//   describe('from', () => {
//     it('9とstring', () => {
//       const maskReg = MaskInputRegExp.from('91o9');

//       expect(maskReg.values[0]).toEqual(/[0-9]/);
//       expect(maskReg.values[1]).toBe('1');
//       expect(maskReg.values[2]).toBe('o');
//       expect(maskReg.values[3]).toEqual(/[0-9]/);
//     });

//     it('aとstring', () => {
//       const maskReg = MaskInputRegExp.from('aあ火a');

//       expect(maskReg.values[0]).toEqual(/[a-zA-Z]/);
//       expect(maskReg.values[1]).toBe('あ');
//       expect(maskReg.values[2]).toBe('火');
//       expect(maskReg.values[3]).toEqual(/[a-zA-Z]/);
//     });

//     it('Aとstring', () => {
//       const maskReg = MaskInputRegExp.from('Aあ火A');

//       expect(maskReg.values[0]).toEqual(/[a-zA-Z]/);
//       expect(maskReg.values[1]).toBe('あ');
//       expect(maskReg.values[2]).toBe('火');
//       expect(maskReg.values[3]).toEqual(/[a-zA-Z]/);
//     });

//     it('*とstring', () => {
//       const maskReg = MaskInputRegExp.from('*あ火*');

//       expect(maskReg.values[0]).toEqual(/[.]/);
//       expect(maskReg.values[1]).toBe('あ');
//       expect(maskReg.values[2]).toBe('火');
//       expect(maskReg.values[3]).toEqual(/[.]/);
//     });
//   });
// });
