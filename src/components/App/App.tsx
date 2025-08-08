import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import { useState } from "react";
import { VoteType, Votes } from "../../types/votes";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (value: VoteType) => {
    setVotes({
      ...votes,
      [value]: votes[value] + 1,
    });
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.bad + votes.good + votes.neutral;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />

      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes}
      />

      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
