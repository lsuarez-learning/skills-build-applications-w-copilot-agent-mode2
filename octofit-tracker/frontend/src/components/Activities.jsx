import ResourcePage from './ResourcePage.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

export default function Activities() {
  return <ResourcePage resource="activities" endpoint={apiEndpoint} title="Activity log" description="A clear record of the work that moves you forward." emptyMessage="Log your first activity to see it here." columns={[
    { label: 'Activity', render: (activity) => activity.type },
    { label: 'Duration', render: (activity) => `${activity.duration} min` },
    { label: 'Calories', render: (activity) => activity.calories },
    { label: 'Date', render: (activity) => new Date(activity.date).toLocaleDateString() },
  ]} />
}
