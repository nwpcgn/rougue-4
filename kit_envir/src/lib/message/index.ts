export { msg } from './messages.svelte.ts';
//@index('./**/*.svelte', (f, _) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)
export { default as Messages } from './Messages.svelte';
export { default as MsgForm } from './MsgForm.svelte';
//@endindex
