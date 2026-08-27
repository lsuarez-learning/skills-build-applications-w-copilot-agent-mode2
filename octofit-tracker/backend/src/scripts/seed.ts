import { connectDatabase, disconnectDatabase } from '../config/database.js'
import Activity from '../models/Activity.js'
import Leaderboard from '../models/Leaderboard.js'
import Team from '../models/Team.js'
import User from '../models/User.js'
import Workout from '../models/Workout.js'

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase()

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ])

    const users = await User.create([
      { username: 'alexfit', email: 'alex@example.com', name: 'Alex Rivera' },
      { username: 'jamieactive', email: 'jamie@example.com', name: 'Jamie Chen' },
      { username: 'taylorstrong', email: 'taylor@example.com', name: 'Taylor Morgan' },
    ])

    const teams = await Team.create([
      { name: 'Morning Movers', description: 'Start the day strong.', members: [users[0]._id, users[1]._id] },
      { name: 'Weekend Warriors', description: 'Make every weekend count.', members: [users[2]._id] },
    ])

    await Activity.create([
      { user: users[0]._id, type: 'Running', duration: 30, calories: 320, date: new Date('2026-08-24') },
      { user: users[1]._id, type: 'Cycling', duration: 45, calories: 410, date: new Date('2026-08-25') },
      { user: users[2]._id, type: 'Strength', duration: 35, calories: 280, date: new Date('2026-08-26') },
    ])

    await Leaderboard.create([
      { user: users[0]._id, points: 1280, rank: 1, period: 'all-time' },
      { user: users[1]._id, points: 1120, rank: 2, period: 'all-time' },
      { user: users[2]._id, points: 980, rank: 3, period: 'all-time' },
    ])

    await Workout.create([
      { name: 'Full Body Foundation', description: 'A balanced strength session.', difficulty: 'beginner', duration: 25, exercises: ['Squats', 'Push-ups', 'Plank'] },
      { name: 'Cardio Intervals', description: 'Build endurance with short bursts.', difficulty: 'intermediate', duration: 30, exercises: ['High knees', 'Mountain climbers', 'Burpees'] },
      { name: 'Power Circuit', description: 'A challenging full-body circuit.', difficulty: 'advanced', duration: 40, exercises: ['Lunges', 'Pull-ups', 'Kettlebell swings'] },
    ])

    console.log(`Database seeding complete: ${users.length} users, ${teams.length} teams`)
  } catch (error: unknown) {
    console.error('Error seeding database:', error)
    process.exitCode = 1
  } finally {
    await disconnectDatabase()
  }
}

seedDatabase();
