// Массив из побеждающих результатов
const resultForWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Отдельная функция для проверки на ряд одинаковых элементов
const checkingForResults = (type) => {
  return resultForWin.some((item) => {
    let current = 0;
    return type.some((itemType) => {
      for (let i = 0; i < item.length; i++) {
        if (itemType === item[i]) {
          current += 1;
        }
        if (current === 3) {
          return true;
        }
      }
    });
  });
};

// Создание массивов с индаксами элементов и возвращает тру или фолс если завершена линия
export const isWin = (arrClickResult) => {
  const circle = [];
  const chest = [];
  console.log(arrClickResult);
  arrClickResult.forEach((item, index) => {
    if (item === 'circle') {
      circle.push(index);
    }
    if (item === 'chest') {
      chest.push(index);
    }
  });

  if (!arrClickResult.includes('')) {
    return true;
  }

  return checkingForResults(circle) || checkingForResults(chest);
};
