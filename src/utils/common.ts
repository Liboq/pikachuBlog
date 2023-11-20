// 数组简单扁平化
export const arrayToTree = (arr: any) => {
  const result = [];
  console.log(arr);

  for (const item of arr) {
    const id = item.pid;
    const mid = item.mid;
    if (id === 0) {
      const newArr = arr.filter((val: any) => {
        return val.pid === mid;
      });
      item['children'] = newArr;
      result.push(item);
    }
  }
  return result;
};
