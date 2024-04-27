import React, { useEffect, useState, lazy } from 'react';
import { ISportsbook } from './types/sportsbook';
import fanduel from './assets/Logos/fanduel.svg'
import caesars from './assets/Logos/caesars.svg'
import bet365 from './assets/Logos/bet365.svg'
const Container = lazy(() => import("./Components/Container/Container"));

const arrayData: ISportsbook[] = [
  {
    id: 1,
    logo: fanduel,
    title: "Fanduel",
    headline: "Bet $5, Get $200",
    about: "New customers only. Deposit min $10. Place first bet of min $5 and get $200 in Bonus Bets if wager wins (within 72 hours).",
    rating: 4.7,
    link: "/",
    payout_min: 1,
    payout_max: 7,
    benefits: ["Best user experience", "World-class mobile app", "Best for live betting"],
    code: ""
  },
  {
    id: 2,
    logo: caesars,
    title: "Caesars",
    headline: "$1000 First Bet on Caesars",
    about: "Terms & conditions apply",
    rating: 4.7,
    link: "/",
    payout_min: 1,
    payout_max: 5,
    benefits: ["Best customer support", "Highly trusted legacy brand", "NFL live streaming"],
    code: "COVERBONUS1000"
  },
  {
    id: 3,
    logo: bet365,
    title: "Bet365",
    headline: "Bet $5, Get $150",
    about: "or $1000 First Bet Safety Net",
    rating: 4.5,
    link: "/",
    payout_min: 0,
    payout_max: 5,
    benefits: ["Best prices", "Gold standart layout", "World-class live betting"],
    code: "COVERS"
  },
]

function App() {
  const [sportsbookList, setSportsBookList] = useState<ISportsbook[]>([])

  useEffect(() => {
    setSportsBookList(arrayData)
  }, [setSportsBookList])

  return (
    <div className="App">
      <Container data={sportsbookList} />
    </div>
  );
}

export default App;
