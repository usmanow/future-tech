const rootSelector = '[data-js-tabs]'

const selectors = {
  button: '[data-js-tabs-button]',
  content: '[data-js-tabs-content]'
}

const stateClasses = {
  isActive: 'is-active'
}

const stateAttributes = {
  ariaSelected: 'aria-selected',
  tabIndex: 'tabindex',
}

const setupTabs = (rootElement) => {
  const tabButtons = rootElement.querySelectorAll(selectors.button)
  const tabContent = rootElement.querySelectorAll(selectors.content)
  const lastTabIndex = tabButtons.length - 1

  let activeTabIndex = [...tabButtons].findIndex(button => button.classList.contains(stateClasses.isActive))

  const updateUI = () => {
    tabButtons.forEach((button, index) => {
      const isActive = index === activeTabIndex
      button.classList.toggle(stateClasses.isActive, isActive)
      button.setAttribute(stateAttributes.ariaSelected, isActive.toString())
      button.setAttribute(stateAttributes.tabIndex, isActive ? '0' : '-1')
    })

    tabContent.forEach((content, index) => content.classList.toggle(stateClasses.isActive, index === activeTabIndex))
  }

  const activateTab = (index) => {
    activeTabIndex = index
    updateUI()
    tabButtons[index].focus()
  }

  const keyHandler = (event) => {
    const { code, metaKey} = event

    const actions = {
      ArrowLeft: () => activateTab(activeTabIndex === 0 ? lastTabIndex : activeTabIndex - 1),
      ArrowRight: () => activateTab(activeTabIndex === lastTabIndex ? 0 : activeTabIndex + 1),
      Home: () => activateTab(0),
      End: () => activateTab(lastTabIndex)
    }

    if (metaKey && code === 'ArrowLeft') return activateTab(0)
    if (metaKey && code === 'ArrowRight') return activateTab(lastTabIndex)

    actions[code]?.()
  }

  tabButtons.forEach((button, index) => button.addEventListener('click', () => activateTab(index)))

  rootElement.addEventListener('keydown', keyHandler)

  updateUI()
}

const setupTabsCollection = () => document.querySelectorAll(rootSelector).forEach(setupTabs)

export default setupTabsCollection