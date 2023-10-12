import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

let gameSave = new GameSaving();

const gameSaveLoad = (async () => {
  try {
    const readResolve = await read();
    const saving = await json(readResolve);
    gameSave = JSON.parse(saving);
    return gameSave;
  } catch (error) {
    throw new Error('Oops!');
  }
})();

export default gameSaveLoad;