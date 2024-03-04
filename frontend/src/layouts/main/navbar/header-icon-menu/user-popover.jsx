import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { RightArrowSVG } from "../../../../assets/icons/svg-icons";
// import { logout } from "~/store/slices/auth";
import { UserOutlined } from "@ant-design/icons";
import { useOutsideDetectForHeaderIconMenu } from "../../../../helpers/use-outside-detector";

const UserPopover = () => {
//   const { userName }: IUser = useSelector((state: RootState) => state.auth);
  const [openUser, setOpenUser] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  useOutsideDetectForHeaderIconMenu(ref1, ref2, setOpenUser, openUser);

  const handleLogOut = () => {
    // dispatch(logout());
  };

  return (
    <li className="iconMenuList" ref={ref1}>
      <a
        style={{ cursor: "pointer" }}
        className={openUser ? "opened-user" : ""}
        onClick={() => setOpenUser(!openUser)}
      >
        <UserOutlined rev={undefined} />
      </a>
      {/* <ul ref={ref2} className={`userMenuList ${openUser ? "open" : ""}`}>
        <li className="menuList" style={{ marginTop: "1.5rem" }}>
          <NavLink to={"#"}>Profile and settings</NavLink>
        </li>
        <li onClick={handleLogOut} className="menuList logout">
          <a>
            Log out <RightArrowSVG />
          </a>
        </li>
      </ul> */}
    </li>
  );
};

export default UserPopover;
