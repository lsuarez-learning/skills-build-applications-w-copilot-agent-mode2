import ResourcePage from './ResourcePage.jsx'

export default function Activities() {
  return <ResourcePage resource="activities" title="Activity log" description="A clear record of the work that moves you forward." emptyMessage="Log your first activity to see it here." columns={[
    { label: 'Activity', render: (activity) => activity.type },
    { label: 'Duration', render: (activity) => `${activity.duration} min` },
    { label: 'Calories', render: (activity) => activity.calories },
    { label: 'Date', render: (activity) => new Date(activity.date).toLocaleDateString() },
  ]} />
}
