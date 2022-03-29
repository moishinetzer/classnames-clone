type classNames = string | { [key: string]: boolean } | classNames[];

export const classNames = (...items: Array<classNames>) => {
  let string: string[] = [];
  items.forEach(item => {
    if (typeof item === 'string') {
      string.push(item);
    } else if (Array.isArray(item)) {
      // If it's an array of class names, flatten them out
      string.push(classNames(...item));
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
