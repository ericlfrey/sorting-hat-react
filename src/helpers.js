export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const houses = [
  'Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'
]

export const hogwartsStudents = (arr) => arr.filter(item => item.isStudent).sort((a, b) => a.house.localeCompare(b.house));
export const voldemortsArmy = (arr) => arr.filter(item => !item.isStudent).sort((a, b) => a.name.localeCompare(b.name));
