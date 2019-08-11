# Github By Stars

This script will pull X pages from the results of [package dependents](https://github.com/ramda/ramda/network/dependents) and sort them by number of stars on GH. They seem to be sorted by recent change by default, but there is no way to sort them by stars.

## Install

```
git clone https://github.com/dteiml/github-by-stars && \
cd github-by-stars && \
npm i
```


## Setup

Go to https://github.com. Open Network tab in dev tools. Refresh page and click on first request. Copy the `Request headers` to your clipboard.

Create a `.env` file and paste the headers. They should should something like this:

```
Host = github.com
Connection = keep-alive
...
```

That's it!

## Run

```
npx nodemon index.js
```

## Customize

Everything can be customized from the terminal:
- `--author` - either user or organization account name 
- `--name` - package name
- `--begin` - which page we should begin at. The pages are unfortunately in a linked list, so if you want to get page `X`, you must have in the past gotten page `X-1`. So for first run the only value this can be is 0.
- `--end` - end at which page (excluding this one). Results are 30 per page.

So example usage would be `node index.js --author facebook --name react --begin 0 --end 100`

## Contribute!

- Error handling
- Fix selectors if they stop working

## Examples

Top 10:

### Ramda
1. [ghostery/ghostery-extension](https://github.com/ghostery/ghostery-extension)
2. [javieraviles/node-typescript-koa-rest](https://github.com/javieraviles/node-typescript-koa-rest)
3. [Accenture/reactive-interaction-gateway](https://github.com/Accenture/reactive-interaction-gateway)
4. [spring-io/start.spring.io](https://github.com/spring-io/start.spring.io)
5. [elastic/docs](https://github.com/elastic/docs)
6. [ghiscoding/Angular-Slickgrid](https://github.com/ghiscoding/Angular-Slickgrid)
7. [wuyawei/fe-code](https://github.com/wuyawei/fe-code)
8. [mhnpd/react-loader-spinner](https://github.com/mhnpd/react-loader-spinner)
9. [botfront/botfront](https://github.com/botfront/botfront)
10. [retyui/react-native-confirmation-code-field](https://github.com/retyui/react-native-confirmation-code-field)

## Styled Components
1. [assembl/assembl](https://github.com/assembl/assembl)
2. [zendeskgarden/react-containers](https://github.com/zendeskgarden/react-containers)
3. [lugia-ysstech/lugia](https://github.com/lugia-ysstech/lugia)
4. [sapegin/blog.sapegin.me](https://github.com/sapegin/blog.sapegin.me)
5. [steadylearner/Rust-Full-Stack](https://github.com/steadylearner/Rust-Full-Stack)
6. [clovers-network/clovers-dapp](https://github.com/clovers-network/clovers-dapp)
7. [gnaudio/jabra-browser-integration](https://github.com/gnaudio/jabra-browser-integration)
8. [akiver/csgo-map-veto](https://github.com/akiver/csgo-map-veto)
9. [hicommonwealth/edgeware-lockdrop](https://github.com/hicommonwealth/edgeware-lockdrop)
10. [michaeldera/edliz](https://github.com/michaeldera/edliz)

### Cheerio
1. [stefanjudis/perf-tooling](https://github.com/stefanjudis/perf-tooling)
2. [mozilla/spidernode](https://github.com/mozilla/spidernode)
3. [vadimcn/vscode-lldb](https://github.com/vadimcn/vscode-lldb)
4. [ferrannp/fithero](https://github.com/ferrannp/fithero)
5. [zishon89us/node-cheat](https://github.com/zishon89us/node-cheat)
6. [the-blue-alliance/the-blue-alliance](https://github.com/the-blue-alliance/the-blue-alliance)
7. [glacambre/firenvim](https://github.com/glacambre/firenvim)
8. [zombieFox/nightTab](https://github.com/zombieFox/nightTab)
9. [relay-tools/relay-hooks](https://github.com/relay-tools/relay-hooks)
10. [ismamz/refined-wikipedia](https://github.com/ismamz/refined-wikipedia)