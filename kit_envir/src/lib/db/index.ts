// Reexport your entry components here
//@index('./**/x*.svelte', (f, _) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)

//@endindex

//@index('./utils/*.js', (f, _) => `export { default as ${f.name} } from '${f.path}'`)

//@endindex
import supabase from './supabase.js';
export { auth, signOut } from './auth.svelte.ts';
export { default as Auth } from './Auth.svelte';
export const getUser = async () => {
	try {
		const {
			data: { user }
		} = await supabase.auth.getUser();
		if (user) {
			auth.signIn(user);
		} else {
			auth.signOut();
		}
	} catch (error) {
		console.error(error);
	}
};
