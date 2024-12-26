import { ActivityGraph } from "./ActivityGraph";
import { RecentTransactions } from "./RecentTransactions";
import { StatCards } from "./StatCards";
import { UsageRadar } from "./UsageRadar";

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <ActivityGraph />
      <UsageRadar />
      <RecentTransactions />
    </div>
  );
};
