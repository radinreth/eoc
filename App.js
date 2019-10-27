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
import { schema } from './src/models/schema'
import { dbModels } from './src/models/index.js'

import { createNavigation } from './src/screens/Navigation'

const adapter = new SQLiteAdapter({
  dbName: 'eocMobile',
  schema
})

const database = new Database({
  adapter,
  modelClasses: [dbModels],
  actionsEnabled: true
})

const Navigator = createNavigation({ database })

export default Navigator;
