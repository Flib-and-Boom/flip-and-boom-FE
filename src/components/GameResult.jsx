import { setMusicSetting } from "../actionCreators";
import { scoreCalculation } from "../helpers";
import { useDispatch } from "react-redux";

export default function GameResult({ hp, totalTurn }) {
	const dispatch = useDispatch()
	dispatch(setMusicSetting(false))
  return (
    <>
      <div className="fixed h-screen w-screen bg-black z-10 opacity-70 top-0 left-0"></div>
      <div className="fixed h-screen w-screen z-20 bg-transparent top-0 left-0 flex justify-center items-center">
        <div className="w-9/12 h-4/5 bg-white rounded-lg flex flex-col items-center justify-center text-3xl font-bold">
          <h1>hp remaining : {hp}</h1>
          <h1>total turn : {totalTurn}</h1>
          <h1>score : {scoreCalculation(hp, totalTurn)}</h1>
        </div>
      </div>
	  <audio autoPlay src="/assets/audio/hore.mp3">
		<source src="/assets/audio/hore.mp3" />
	  </audio>
    </>
  );
}
