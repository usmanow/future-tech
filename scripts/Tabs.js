const rootSelector = '[data-js-tabs]'

class Tabs {
  selectors = {
    root: rootSelector,
    button: `[data-js-tabs-button]`,
    content: '[data-js-tabs-content]'
  }

  stateClasses = {
    isActive: 'is-active'
  }

  stateAttributes = {
    ariaSelected: 'aria-selected',
    tabIndex: 'tabindex',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.buttonElements = this.rootElement.querySelectorAll(this.selectors.button)
    this.contentElements = this.rootElement.querySelectorAll(this.selectors.content)
    this.state = {
      activeTabIndex: [...this.buttonElements].findIndex(() => {
        
      })
    }
  }
}

class TabsCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Tabs(element)
    })
  }
}

export default TabsCollection