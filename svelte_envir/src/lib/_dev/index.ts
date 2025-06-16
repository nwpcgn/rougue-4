// place files you want to import through the `$lib` alias in this folder.
//@index('./**/*.svelte', (f, _) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)
export { default as Sprites } from './icons/sprites.svelte'
export { default as Loader } from './Loader.svelte'
export { default as Wheel } from './wheel/Wheel.svelte'
//@endindex
//@index('./utils/x*.js', (f, _) => `export { default as ${f.name} } from '${f.path}'`)

//@endindex
export { default as randNum } from './utils/randNum'
export { default as shuffle } from './utils/shuffle'
export { default as sleep } from './utils/sleep'
