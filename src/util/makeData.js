export function makeData(array) {
  return array.map((value) => {
    const obj = {};
    obj['x'] = value.date_m;
    obj['y'] = value.title__avg;
    return obj;
  });
}
