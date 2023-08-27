import { randomNumber, pause, removeCardFromBoard, flipOpen, flipClose } from "../helpers";

export const cpuTurnRandom = async ({
	board,
	setEnemyHp,
	enemyHp,
	setTurn,
	setHp,
	hp,
	setBoard,
}) => {
	try {
		const enemyCards = [];

    const boardShownTrueOnly = structuredClone(board).filter((el) => el.shown)

    console.log(boardShownTrueOnly.length, "<<length boardtrueonly");

		const firstRandomNum = randomNumber(boardShownTrueOnly);

		await pause(1500);

		const firstRandomCard = boardShownTrueOnly?.splice(firstRandomNum, 1);

    const newBoard = flipOpen(board, setBoard, firstRandomCard[0].index)

		if (firstRandomCard[0].value == "bomb") {
			setEnemyHp(enemyHp - 2);

      await pause(2000)

      flipClose(board, setBoard)

			setTurn("user");

			return;
		}

		enemyCards.push([firstRandomCard[0].value, firstRandomCard[0].index]);

		await pause(1500);

		const secondRandomNum = randomNumber(boardShownTrueOnly);

		const secondRandomCard = boardShownTrueOnly?.splice(secondRandomNum, 1);

    flipOpen(newBoard, setBoard, secondRandomCard[0].index)

		if (secondRandomCard[0].value == "bomb") {
			setEnemyHp(enemyHp - 2);

			await pause(2000);

      flipClose(board, setBoard)

			setTurn("user");

			return;
		}

		enemyCards.push([secondRandomCard[0].value, secondRandomCard[0].index]);

		if (enemyCards[0][0] == enemyCards[1][0]) {
			const damageDealtToUser = +enemyCards[0][0];

			hp - damageDealtToUser < 0 ? setHp(0) : setHp(hp - damageDealtToUser);

      await pause(2000);

			removeCardFromBoard(board, setBoard, enemyCards);
		}

		await pause(2000);

    flipClose(board, setBoard)

		setTurn("user");
	} catch (err) {
		throw err;
	}
};