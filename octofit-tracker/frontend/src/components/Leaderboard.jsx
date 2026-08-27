import ResourcePage from './ResourcePage.jsx'

export default function Leaderboard() {
  return <ResourcePage resource="leaderboard" title="Leaderboard" description="A little friendly pressure, measured in points." emptyMessage="The leaderboard is waiting for its first score." columns={[
    { label: 'Rank', render: (entry) => `#${entry.rank}` },
    { label: 'Athlete', render: (entry) => entry.user?.name ?? entry.user },
    { label: 'Points', render: (entry) => entry.points?.toLocaleString() },
    { label: 'Period', render: (entry) => entry.period },
  ]} />
}
