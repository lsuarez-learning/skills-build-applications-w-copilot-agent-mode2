import ResourcePage from './ResourcePage.jsx'

export default function Users() {
  return <ResourcePage resource="users" title="Athletes" description="Everyone showing up for their next strong session." emptyMessage="No athletes yet." columns={[
    { label: 'Name', render: (user) => user.name },
    { label: 'Username', render: (user) => `@${user.username}` },
    { label: 'Email', render: (user) => user.email },
  ]} />
}
