import { parseFileName } from './parseFileName';

describe('parseFileName', () => {
  it('should return the file name without the extension', () => {
    const fileName = 'file.txt';
    expect(parseFileName(fileName)).toBe('file');
  });
});
