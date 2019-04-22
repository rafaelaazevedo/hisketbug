import Utils from './helpers/utils'
import SearchPage from './pages/searchPage'

const utils = new Utils()
const searchPage = new SearchPage()

fixture`Search`
  .page`${utils.baseUrl}`

test('Search via Google', async t => {
  const word = searchPage.getWord()
  await searchPage.searchWord(word)
  await searchPage.assertSearchLinks(word)
})
