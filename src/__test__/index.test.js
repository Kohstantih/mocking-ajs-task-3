import getLevel from '../index';

test.each([
    [12, 'Ваш текущий уровень: 80'],
    [1, 'Информация об уровне временно недоступна'],
  ])(('massage for should %i %s'), (id, expected) => {
    const result = getLevel(id);
    expect(result).toBe(expected);
  });