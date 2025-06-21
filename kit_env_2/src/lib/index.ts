// place files you want to import through the `$lib` alias in this folder.
//@index('./components/*.svelte', (f, _) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)
export { default as AsciiBox } from './components/AsciiBox.svelte'
export { default as Details } from './components/Details.svelte'
export { default as Hero } from './components/Hero.svelte'
export { default as InfoBar } from './components/InfoBar.svelte'
export { default as Loader } from './components/Loader.svelte'
export { default as Modal } from './components/Modal.svelte'
export { default as PreviewMap } from './components/PreviewMap.svelte'
export { default as SideBar } from './components/SideBar.svelte'
export { default as Switch } from './components/Switch.svelte'
//@endindex
export { default as Sprites } from './asset/sprites.svelte'

//@index(['./utils/*.js','./xxx/*.ts'], (f, _) => `export { default as ${f.name} } from '${f.path}'`)
export { default as copyToClip } from './utils/copyToClip'
export { default as distance } from './utils/distance'
export { default as paginate } from './utils/paginate'
export { default as randNum } from './utils/randNum'
export { default as shuffle } from './utils/shuffle'
export { default as sleep } from './utils/sleep'
export { default as uuid } from './utils/uuid'
//@endindex
//@index('./data/*.json', (f, _) => `export { default as ${_.camelCase(f.name)} } from '${f.path}${f.ext}'`)
export { default as gameInit } from './data/game-init.json'
export { default as mainMenu } from './data/main-menu.json'
export { default as mainViews } from './data/main-views.json'
export { default as startPanel } from './data/start-panel.json'
//@endindex
