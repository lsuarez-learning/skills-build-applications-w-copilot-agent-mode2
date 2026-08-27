import { createCrudRouter } from './crud.js'
import Leaderboard from '../models/Leaderboard.js'

export default createCrudRouter(Leaderboard, { sort: { points: -1, rank: 1 } })
