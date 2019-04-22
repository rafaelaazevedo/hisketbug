import { t } from 'testcafe'
import Elements from './elements'

const elements = new Elements()

export default class SearchPage {
  getWord () {
  }

  async searchWord (word) {
    await t
      .typeText(elements.getQueryBox(), word)
      .pressKey('enter')
  }

  async assertSearchLinks (word) {
    await t
      .expect(elements.getLinks().exists).Ok()
  }
}
