import { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteButtonsProps {
  onVote: (value: VoteType) => void;
  canReset: number;
  onReset: () => void;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteButtonsProps) {
  return (
    <div className={css.container}>
      <button onClick={() => onVote("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => onVote("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onVote("bad")} className={css.button}>
        Bad
      </button>

      {canReset > 0 && (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
}
