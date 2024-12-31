import { MaskInputRegExp } from './maskInput';

describe('MaskInputRegExp', () => {
  describe('from', () => {
    it('9とstring', () => {
      const maskReg = MaskInputRegExp.from('91o9');

      expect(maskReg.value[0]).toEqual(/[0-9]/);
      expect(maskReg.value[1]).toBe('1');
      expect(maskReg.value[2]).toBe('o');
      expect(maskReg.value[3]).toEqual(/[0-9]/);
    });

    it('aとstring', () => {
      const maskReg = MaskInputRegExp.from('aあ火a');

      expect(maskReg.value[0]).toEqual(/[a-zA-Z]/);
      expect(maskReg.value[1]).toBe('あ');
      expect(maskReg.value[2]).toBe('火');
      expect(maskReg.value[3]).toEqual(/[a-zA-Z]/);
    });

    it('Aとstring', () => {
      const maskReg = MaskInputRegExp.from('Aあ火A');

      expect(maskReg.value[0]).toEqual(/[a-zA-Z]/);
      expect(maskReg.value[1]).toBe('あ');
      expect(maskReg.value[2]).toBe('火');
      expect(maskReg.value[3]).toEqual(/[a-zA-Z]/);
    });

    it('*とstring', () => {
      const maskReg = MaskInputRegExp.from('*あ火*');

      expect(maskReg.value[0]).toEqual(/[.]/);
      expect(maskReg.value[1]).toBe('あ');
      expect(maskReg.value[2]).toBe('火');
      expect(maskReg.value[3]).toEqual(/[.]/);
    });
  });
});
