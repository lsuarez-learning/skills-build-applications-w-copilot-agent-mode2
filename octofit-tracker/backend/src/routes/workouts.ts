import { createCrudRouter } from './crud.js'
import Workout from '../models/Workout.js'

export default createCrudRouter(Workout, { sort: { name: 1 } })
