import ResourcePage from './ResourcePage.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  return <ResourcePage resource="leaderboard" endpoint={apiEndpoint} title="Leaderboard" description="A little friendly pressure, measured in points." emptyMessage="The leaderboard is waiting for its first score." columns={[
    { label: 'Rank', render: (entry) => `#${entry.rank}` },
    { label: 'Athlete', render: (entry) => entry.user?.name ?? entry.user },
    { label: 'Points', render: (entry) => entry.points?.toLocaleString() },
    { label: 'Period', render: (entry) => entry.period },
  ]} />
}
