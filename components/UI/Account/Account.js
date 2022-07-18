import Link from "next/link";
import { useStateContext } from "../../Provider";

const Account = (props) => {
  const globalState = useStateContext();
//   const loopComp = (comp, digit) => {
//     let thumbnails = [];
//     for (let index = 1; index <= digit; index++) {
//       thumbnails.push(comp);
//     }
//     return thumbnails;
//   };
  return (
    <div
      className={`account ${
        globalState.accountModalOpen ? "account--active" : ""
      }`}
    >
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list"></div>
      </div>
      <div className="account__menu">
        <ul className="account__main">
          <li>
            <Link href="/" className="active">
              My List
            </Link>
          </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="account__main">
          <li>
            <Link href="/" className="active">
              Account
            </Link>
          </li>
          <li>
            <Link href="/">Sign Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
