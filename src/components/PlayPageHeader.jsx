import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

import defaultChar from "/assets/character/default.png";
import smolderingDetonation from "/assets/character/smoldering-detonation.png";
import mrsParty from "/assets/character/mrs-party.png";
import mrKing from "/assets/character/mr-king.png";
import azureExplosiomancer from "/assets/character/azure-explosiomancer.png";
import crimsonSpecter from "/assets/character/crimson-specter.png";
import normalGuy from "/assets/character/normal-guy.png";
import owen from "/assets/character/owen.png";
import vampiricBlaster from "/assets/character/vampiric-blaster.png";

// effects
import bomb100 from "/assets/bomb/bomb-01.png";
import bomb125 from "/assets/bomb/bomb-02.png";
import bomb150 from "/assets/bomb/bomb-07.png";
import bomb175 from "/assets/bomb/bomb-04.png";
import bomb200 from "/assets/bomb/bomb-05.png";
import bomb210 from "/assets/bomb/bomb-08.png";
import bomb220 from "/assets/bomb/bomb-09.png";
import bomb250 from "/assets/bomb/bomb-03.png";
import explosion from "/explosion/explosion.png";

export default function PlayPageHeader({
	hp,
	enemyHp,
	setHp,
	setEnemyHp,
	turn,
	boom,
	throwBomb100,
	throwBomb125,
	throwBomb150,
	throwBomb175,
	throwBomb200,
	throwBomb210,
	throwBomb220,
	throwBomb250,
	boomSelf,
	throwBombSelf100,
	throwBombSelf125,
	throwBombSelf150,
	throwBombSelf175,
	throwBombSelf200,
	throwBombSelf210,
	throwBombSelf220,
	throwBombSelf250,
	wobbleCpu,
	wobbleSelf,
	shakeCpu,
	shakeSelf,
}) {
	const { profile } = useSelector((state) => state.userReducer);
	const { gameMode } = useSelector((state) => state.gameModeReducer);

	const props = useSpring({
		val: hp,
		from: {
			val: 0,
		},
	});

	const props2 = useSpring({
		val: enemyHp,
		from: {
			val: 0,
		},
	});

	// ignore this const, for re-rendering purpose only
	const abc = hp + 100;
	const def = enemyHp + 100;

	useEffect(() => {
		setHp(1000), setEnemyHp(1000);
	}, []);

	return (
		<div className="flex mx-auto justify-between text-white italic font-bold relative w-[92.5%] flex-1 items-center">
			{throwBomb100 && (
				<div className="absolute w-24 left-[8%] animate-attackBomb z-50">
					<img src={bomb100} className="" />
				</div>
			)}
			{throwBomb125 && (
				<div className="absolute w-24 left-[8%] animate-attackBomb">
					<img src={bomb125} className="" />
				</div>
			)}
			{throwBomb150 && (
				<div className="absolute w-24 left-[8%] animate-attackBomb">
					<img src={bomb150} className="" />
				</div>
			)}
			{throwBomb175 && (
				<div className="absolute w-24 left-[8%] animate-attackBomb">
					<img src={bomb175} className="" />
				</div>
			)}
			{throwBomb200 && (
				<div className="absolute w-24 left-[8%] animate-attackBomb">
					<img src={bomb200} className="" />
				</div>
			)}
			{throwBomb210 && (
				<div className="absolute w-24 left-[8%] animate-attackBomb">
					<img src={bomb210} className="" />
				</div>
			)}
			{throwBomb220 && (
				<div className="absolute w-24 left-[8%] animate-attackBomb">
					<img src={bomb220} className="" />
				</div>
			)}
			{throwBomb250 && (
				<div className="absolute w-24 left-[8%] animate-attackBomb">
					<img src={bomb250} className="" />
				</div>
			)}

			{throwBombSelf100 && (
				<div className="absolute w-24 right-[8%] animate-attackBombSelf">
					<img src={bomb100} className="" />
				</div>
			)}
			{throwBombSelf125 && (
				<div className="absolute w-24 right-[8%] animate-attackBombSelf">
					<img src={bomb125} className="" />
				</div>
			)}
			{throwBombSelf150 && (
				<div className="absolute w-24 right-[8%] animate-attackBombSelf">
					<img src={bomb150} className="" />
				</div>
			)}
			{throwBombSelf175 && (
				<div className="absolute w-24 right-[8%] animate-attackBombSelf">
					<img src={bomb175} className="" />
				</div>
			)}
			{throwBombSelf200 && (
				<div className="absolute w-24 right-[8%] animate-attackBombSelf">
					<img src={bomb200} className="" />
				</div>
			)}
			{throwBombSelf210 && (
				<div className="absolute w-24 right-[8%] animate-attackBombSelf">
					<img src={bomb210} className="" />
				</div>
			)}
			{throwBombSelf220 && (
				<div className="absolute w-24 right-[8%] animate-attackBombSelf">
					<img src={bomb220} className="" />
				</div>
			)}
			{throwBombSelf250 && (
				<div className="absolute w-24 right-[8%] animate-attackBombSelf">
					<img src={bomb250} className="" />
				</div>
			)}

			{turn == "user" ? (
				<div className="flex flex-col items-center text-xl animate__animated animate__bounceIn gap-y-[0.35rem] w-[5.7%]">
					<div>
						<i
							className="fa-solid fa-circle-right text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>Your Turn</div>
				</div>
			) : (
				<div className="flex flex-col items-center text-xl animate__animated animate__bounceOut gap-y-[0.35rem] w-[5.7%]">
					<div>
						<i
							className="fa-solid fa-circle-right text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>Your Turn</div>
				</div>
			)}

			<div className="w-[10%] flex justify-center items-center">
				<div className="w-[81.5%] relative flex items-center justify-center">
					<img
						src={
							profile?.selectedChar == "mr-king"
								? mrKing
								: profile?.selectedChar == "mrs-party"
								? mrsParty
								: profile?.selectedChar == "azure-explosiomancer"
								? azureExplosiomancer
								: profile?.selectedChar == "crimson-specter"
								? crimsonSpecter
								: profile?.selectedChar == "normal-guy"
								? normalGuy
								: profile?.selectedChar == "owen"
								? owen
								: profile?.selectedChar == "smoldering-detonation"
								? smolderingDetonation
								: profile?.selectedChar == "vampiric-blaster"
								? vampiricBlaster
								: defaultChar
						}
						className={`${wobbleSelf && "animate__animated animate__wobble"} ${
							shakeSelf && "animate__animated animate__shakeX"
						} rotate-[10deg]`}
					/>
					{boomSelf && (
						<div className="absolute z-50 animate__animated animate__zoomIn scale-150">
							<img src={explosion} className="" />
						</div>
					)}
				</div>
			</div>
			<div className="flex flex-col justify-end w-[29.3%]">
				<div className="text-2xl flex justify-between px-4 mb-1">
					<div className="flex">
						HP :{" "}
						<animated.div className="number">
							{props.val.interpolate((val) => Math.floor(val))}
						</animated.div>
					</div>
					<div>{profile?.username?.toUpperCase()}</div>
				</div>
				<div className="h-6 w-full bg-black rounded-2xl border">
					<div
						className="h-full rounded-2xl duration-1000"
						style={{
							width: `${hp / 10}%`,
							backgroundColor: `${
								hp > 500 ? "#2EFF0C" : hp > 250 ? "#FFAC0C" : "#ff0c0c"
							}`,
						}}
					></div>
				</div>
			</div>

			<div className="flex items-end text-7xl w-[10%] justify-center">VS</div>

			<div className="flex flex-col justify-end w-[29.3%]">
				<div className="text-2xl flex justify-between px-4 mb-1">
					<div>{gameMode}</div>
					<div className="flex">
						HP :{" "}
						<animated.div className="number">
							{props2.val.interpolate((val) => Math.floor(val))}
						</animated.div>
					</div>
				</div>
				<div className="h-6 w-full bg-black rounded-2xl border">
					<div
						className="h-full rounded-2xl duration-1000"
						style={{
							width: `${enemyHp / 10}%`,
							backgroundColor: `${
								enemyHp > 500
									? "#2EFF0C"
									: enemyHp > 250
									? "#FFAC0C"
									: "#ff0c0c"
							}`,
						}}
					></div>
				</div>
			</div>
			<div className="w-[10%] flex justify-center items-center">
				<div className="w-[81.5%] relative flex items-center justify-center">
					<img
						src={
							gameMode == "IMPOSSIBLE"
								? mrKing
								: gameMode == "HARD"
								? mrsParty
								: gameMode == "MEDIUM"
								? smolderingDetonation
								: defaultChar
						}
						className={`${
							wobbleCpu && "animate__animated animate__wobble scale-x-[-1]"
						} ${
							shakeCpu && "animate__animated animate__shakeX scale-x-[-1]"
						} scale-x-[-1]`}
						// style={{ transform: "scaleX(-1) rotate(10deg)" }}
					/>
					{boom && (
						<div className="absolute z-50 animate__animated animate__zoomIn scale-150">
							<img src={explosion} className="" />
						</div>
					)}
				</div>
			</div>

			{turn == "cpu" ? (
				<div className="flex flex-col items-center text-xl animate__animated animate__bounceIn gap-y-[0.35rem] w-[5.7%]">
					<div>
						<i
							className="fa-solid fa-circle-left text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>CPU Turn</div>
				</div>
			) : turn == "cpuwait" ? (
				<div className="flex flex-col items-center text-xl animate__animated animate__bounceOut gap-y-[0.35rem] w-[5.7%]">
					<div>
						<i
							className="fa-solid fa-circle-left text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>CPU Turn</div>
				</div>
			) : (
				<div className="w-[5.7%]"> </div>
			)}
		</div>
	);
}
