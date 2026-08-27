import ResourcePage from './ResourcePage.jsx'

export default function Workouts() {
  return <ResourcePage resource="workouts" title="Workouts" description="Pick a focused session and make the next choice easy." emptyMessage="No workouts are available yet." columns={[
    { label: 'Workout', render: (workout) => workout.name },
    { label: 'Level', render: (workout) => workout.difficulty },
    { label: 'Duration', render: (workout) => `${workout.duration} min` },
    { label: 'Exercises', render: (workout) => workout.exercises?.length ?? 0 },
  ]} />
}
