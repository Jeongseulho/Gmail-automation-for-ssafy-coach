import { removeExtension } from './removeExtension';

describe('removeExtension', () => {
  it('문자열에서 확장자를 제거한다', () => {
    const str = '서은진.docx';
    const name = removeExtension(str);
    expect(name).toBe('서은진');
  });
});
