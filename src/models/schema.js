import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema = appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: 'downloads',
      columns: [
        { name: 'sop_name', type: 'string' },
        { name: 'size', type: 'number' }
      ]
    })
  ]
})