/* eslint-disable no-unused-vars */
import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((response) => json(response)).then((value) => {
        const gameSaving = new GameSaving(value);
        resolve(gameSaving);
      });
    });
  }
}
