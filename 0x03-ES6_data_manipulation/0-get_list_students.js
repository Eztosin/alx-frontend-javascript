export default function getListStudents() {
  const objs = [
    { id: 1, firstName: 'Guillame', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  for (const obj of objs) {
    if (typeof obj.id !== 'number') {
      throw new Error('Invalid type for id');
    }
    if (typeof obj.firstName !== 'string') {
      throw new Error('Invalid type for firstName');
    }
    if (typeof obj.location !== 'string') {
      throw new Error('Invalid type for location');
    }
  }
  return objs;
}
