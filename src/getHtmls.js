import {fs,cheerio,R,S,rp,Promise,delay} from '../common'

const getHtmls = R.curry(async (headers, packageAuthor, packageName, begin, end) => {
  let uri = `https://github.com/${packageAuthor}/${packageName}/network/dependents`
  await Promise.mapSeries(R.range(begin, end), async (i) => {
    if (i > 0) {
      const prev = fs.readFileSync(`/Users/dteiml/dev/github-by-stars/dataset/${packageName}/${i - 1}.html`, { encoding: 'utf-8' })
      const $ = cheerio.load(prev)
      uri = $('div.BtnGroup[data-test-selector="pagination"]').children().last().attr('href')
    }
    S.log(`Waiting 5 s`, {})
    await delay(5000)
    const options = {uri, headers, gzip: true}
    S.log(`Fetching`, uri)
    const res = await rp(options)
    S.log(`Writing /Users/dteiml/dev/github-by-stars/dataset/${packageName}/${i}.html`, {})
    S.write(`/Users/dteiml/dev/github-by-stars/dataset/${packageName}/${i}.html`, res)
  })
})

export default getHtmls
