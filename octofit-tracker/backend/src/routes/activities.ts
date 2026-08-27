import { createCrudRouter } from './crud.js'
import Activity from '../models/Activity.js'

export default createCrudRouter(Activity, { sort: { date: -1 } })
