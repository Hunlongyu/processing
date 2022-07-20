import Knex from 'knex'
import 'better-sqlite3'
import { join } from 'path'

console.log('=== path dev ===', join(process.cwd(), '/server/database/db.sqlite'))
console.log('=== path prod ===', join(process.cwd(), 'resources/db/db.sqlite'))

const dbPath = process.env.NODE_ENV !== 'production' ? join(process.cwd(), '/server/database/db.sqlite') : join(process.cwd(), 'resources/db/db.sqlite')
console.log('=== dbPath ===', dbPath)
const knex = Knex({ client: 'better-sqlite3', connection: { filename: dbPath }, useNullAsDefault: true })
async function get() {
  await knex('cost').insert({ bom: 'bom', code: 'code' })
  const list = await knex('cost')
  console.log('=== list ===', list)
}
get()

export default knex
