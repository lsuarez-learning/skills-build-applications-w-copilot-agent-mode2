import ResourcePage from './ResourcePage.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

export default function Teams() {
  return <ResourcePage resource="teams" endpoint={apiEndpoint} title="Teams" description="Find your people and keep the momentum visible." emptyMessage="No teams have been created yet." columns={[
    { label: 'Team', render: (team) => team.name },
    { label: 'Description', render: (team) => team.description },
    { label: 'Members', render: (team) => team.members?.length ?? 0 },
  ]} />
}
