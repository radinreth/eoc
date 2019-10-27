import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const schema = appSchema({
  version: 1,
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