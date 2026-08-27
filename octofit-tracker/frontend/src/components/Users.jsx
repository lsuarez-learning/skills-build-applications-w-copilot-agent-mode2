import ResourcePage from './ResourcePage.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export default function Users() {
  return <ResourcePage resource="users" endpoint={apiEndpoint} title="Athletes" description="Everyone showing up for their next strong session." emptyMessage="No athletes yet." columns={[
    { label: 'Name', render: (user) => user.name },
    { label: 'Username', render: (user) => `@${user.username}` },
    { label: 'Email', render: (user) => user.email },
  ]} />
}
