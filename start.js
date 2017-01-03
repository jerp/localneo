#!/usr/bin/env node
const MapReader = require('./src/MapReader')
const map = MapReader.fromApplicationDirectory(process.cwd())
const app = map.getApplication()

app.listen(4567)
