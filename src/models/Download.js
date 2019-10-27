import { Model, Q } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export class Download extends Model {
  static table = 'downloads'

  @field('sop_name') sopName
  @field('size') size
}