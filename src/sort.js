import {fs,R,S,cheerio,util} from '../common'

const objs = []

const sort = R.curry((packageName, end) => {
  S.log(`Sorting results... please allow a few minutes`, {})
  R.times((i) => {
    const res = fs.readFileSync(`/Users/dteiml/dev/github-by-stars/dataset/${packageName}/${i}.html`, { encoding: 'utf-8' })
    const $ = cheerio.load(res)
    const els = $(`div.Box > div.Box-row`).toArray()
    els.map(el => {
      const user = $('a[data-hovercard-type="user"]', el).text()
      const org = $('a[data-hovercard-type="organization"]', el).text()
      const author = user || org
      const repo = $('a[data-hovercard-type="repository"]', el).text()
      const repoUrl = `https://github.com` + $('a[data-hovercard-type="repository"]', el).attr('href')
      const noOf = $('span.text-gray-light.text-bold.pl-3', el).text()
      const [stars, forks] = R.map(Number.parseInt, R.match(/\d+/g, noOf))
      const a = { author, repo, repoUrl, stars, forks }
      objs.push(a)
      // const aLog = util.inspect(a)
      // S.log(`aLog`, aLog)
    })
  }, end)

  const sorted = R.pipe(
    R.uniq,
    R.sortBy(R.prop(`stars`)),
    R.reverse,
    R.slice(0, 10),
    util.inspect,
  )(objs)

  S.log(`sorted`, sorted)
})

export default sort

