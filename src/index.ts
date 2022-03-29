// Type: Accepts strings or objects
type ClassNames = string | { [key: string]: boolean };

export const classNames = (...items: Array<ClassNames>) => {
  let string: string[] = [];
  items.forEach(item => {
    if (typeof item === 'string') {
      string.push(item);
    } else if (typeof item === 'object') {
      Object.keys(item).forEach(key => {
        if (item[key]) {
          string.push(key);
        }
      });
    }
  });

  return string.join(' ');
};
