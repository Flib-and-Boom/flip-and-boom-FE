import LoadingScreen from "../components/LoadingScreen";
import NavigationBar from "../components/Navigation";
import SIdeBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../actionCreators";

export default function BaseLayout() {
  const dispatch = useDispatch()
  // const { profile } = useSelector(state => state.userReducer)
  dispatch(fetchUserProfile())
  return (
    <>
      <NavigationBar />
      <div
        className="flex min-h-screen"
        style={{
          background:
            "linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 100%)",
        }}
      >
        <SIdeBar />
        <Outlet />
        {/* <LoadingScreen /> */}
        {/* <div className="overflow-y-auto"></div> */}
      </div>
    </>
  );
}
