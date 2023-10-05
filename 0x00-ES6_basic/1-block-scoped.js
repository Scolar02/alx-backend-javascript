export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // You don't need to redeclare task and task2 here
    // task = true;   // Remove this line
    // task2 = false; // Remove this line
  }

  return [task, task2];
}
