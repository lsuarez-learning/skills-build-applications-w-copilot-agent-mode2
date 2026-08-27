import ResourcePage from './ResourcePage.jsx'

export default function Teams() {
  return <ResourcePage resource="teams" title="Teams" description="Find your people and keep the momentum visible." emptyMessage="No teams have been created yet." columns={[
    { label: 'Team', render: (team) => team.name },
    { label: 'Description', render: (team) => team.description },
    { label: 'Members', render: (team) => team.members?.length ?? 0 },
  ]} />
}
