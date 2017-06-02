const csv = require('csv')
const fs = require('fs')
const path = require('path')

const transformRow = function(data) {
  try { data.push(data[47].split(',')[6].split(':')[1]) } catch(e) { data.push('') }
  try { data.push(data[47].split(',')[7].split(':')[1]) } catch(e) { data.push('') }
  return data
}

fs.createReadStream('input/input.csv')
  .pipe(csv.parse())
  .pipe(csv.transform(transformRow))
  .pipe(csv.stringify())
  .pipe(fs.createWriteStream('output/output.csv'))
