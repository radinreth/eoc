/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { mySchema } from './src/models/schema'
import { dbModels } from './src/models/index.js'
import { Download } from './src/models/Download'

import { createNavigation } from './src/screens/Navigation'

const adapter = new SQLiteAdapter({
  dbName: 'eocMobile',
  schema: mySchema
})

const database = new Database({
  adapter,
  modelClasses: [Download],
  actionsEnabled: true
})

const Navigator = createNavigation({ database })

export default Navigator;
