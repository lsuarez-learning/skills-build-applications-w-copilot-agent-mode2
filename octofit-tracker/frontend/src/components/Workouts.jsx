import ResourcePage from './ResourcePage.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

export default function Workouts() {
  return <ResourcePage resource="workouts" endpoint={apiEndpoint} title="Workouts" description="Pick a focused session and make the next choice easy." emptyMessage="No workouts are available yet." columns={[
    { label: 'Workout', render: (workout) => workout.name },
    { label: 'Level', render: (workout) => workout.difficulty },
    { label: 'Duration', render: (workout) => `${workout.duration} min` },
    { label: 'Exercises', render: (workout) => workout.exercises?.length ?? 0 },
  ]} />
}
