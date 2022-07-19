import Link from "next/link";
import { useStateContext } from "../../Provider";
import { useEffect } from 'react'

const Account = (props) => {
  const globalState = useStateContext();

  useEffect (() => {
    if(globalState.accountModalOpen){
      document.body.style.overflowY = 'hidden';
    }else {
      document.body.style.overflowY = 'auto';
    }
  }, [globalState.accountModalOpen])

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
