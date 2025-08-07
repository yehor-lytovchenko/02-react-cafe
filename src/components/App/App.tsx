import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { useState } from "react";
import { VoteType, Votes } from "../../types/votes";

const [votes, setVotes] = useState: Votes({
  good: 0,
  neutral: 0,
  bad: 0,
});

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}
