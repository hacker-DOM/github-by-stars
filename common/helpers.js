import {R,fs,util} from './index'

// location : String -> NI (Not important)
const createIfNotExist = R.pipe(
  R.split(`/`),
  R.dropLast(1),
  R.join(`/`),
  R.ifElse(
    fs.existsSync,
    R.identity,
    location => fs.mkdirSync(location, {recursive: true})
  ),
)

export const append = (location, data) => {
  createIfNotExist(location)
  fs.appendFileSync(location, data)
}

export const write = (location, data) => {
  createIfNotExist(location)
  fs.writeFileSync(location, data)
}

export const log = R.curry((text, input) => {
  if (!input || R.equals(input, {})) {
    console.log(`${text}`)
  } else {
    input = input.statusCode || input
    console.log(`${text}: ${(input)}`)
    return input
  }
})

export const tryCatch = R.curry(async (_fn, _log, _obj) => {
  try {
    return await _fn(_obj)
  } catch (e) {
    _log(e)
    throw e
  }
})

export const get = R.curry((index, line) => {
  return R.split('\t', line)[index]
})

export const debug = item => {
  debugger
  return item
}

export const out = R.curry((filePath, variable, ext = 'csv') => {
  const dirNames = filePath.split(`/`)
  const fileName = dirNames[dirNames.length - 1]
  dirNames.pop()
  const dir = dirNames.join(`/`) + `/out`
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  let index = 1
  let fileNameToWrite = dir + `/` + fileName + `.out.1.` + ext
  while (fs.existsSync(fileNameToWrite)) {
    index++
    fileNameToWrite = dir + `/` + fileName + `.out.` + index + `.` + ext
  }
  console.log(`Writing to ${fileNameToWrite}`)
  if (Array.isArray(variable)) {
    R.map(line => {
      fs.appendFileSync(fileNameToWrite, `${util.inspect(line, { depth: 3 })}\n`)
      // fs.appendFileSync(fileNameToWrite, `${line}\n`)
    })(variable)
  } else {
    const variableToWrite = typeof variable === 'string' ? variable : util.inspect(variable, { depth: 3 })
    // const variableToWrite = util.inspect(variable, { depth: 3 })
    // const variableToWrite = variable
    fs.writeFileSync(fileNameToWrite, variableToWrite)
  }
})