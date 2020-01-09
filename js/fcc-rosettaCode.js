/**
 * 100 Doors - You have 100 doors, all closed initially. Make 100 passes by the doors. The 1st pass toggle
 * (open if closed, close if open) all doors, the 2nd pass every 2nd door, the 3rd pass every 3rd door, etc.
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/100-doors
 * 
 * @constructor
 * @param {number} numDoors - The number of doors to loop over
 * @returns {number[]} Array of door numbers for the doors that are open after the final pass
 */
function getFinalOpenedDoors(numDoors) {
  let doors = Array(numDoors + 1).fill(false);

  for (let i = 1; i <= 100; i++) {
    doors = doors.map((door, index) => {
      return index % i ? door : !door;
    });
  }

  const lastPassDoors = doors
    .map((door, index) => {
      return door ? index : door;
    })
    .filter((door, index) => {
      if (index === 0) {
        return false;
      }

      return door;
    });

  return lastPassDoors;
}
