import { boardBeforeRandomized, randomNumber } from "../helpers";

export const randomBoard = [];

export async function createdLifecycle(setBoard) {
  let index = 0;

  const boardAfterRandomized = structuredClone(randomBoard);

  const newerBoard = structuredClone(boardBeforeRandomized);

  while (newerBoard?.length) {
    const randomNum = randomNumber(newerBoard);

    const getOneRandomCard = newerBoard?.splice(randomNum, 1);

    getOneRandomCard[0].index = index;

    boardAfterRandomized?.push(getOneRandomCard[0]);

    index++;
  }

  await setBoard(boardAfterRandomized);
}
