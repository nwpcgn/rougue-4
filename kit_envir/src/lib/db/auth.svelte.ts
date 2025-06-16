import supabase from './supabase';
interface User {
	id: string;
	aud: string;
	role: string;
	email: string;
	email_confirmed_at: string;
	phone: string;
	confirmed_at: string;
	last_sign_in_at: string;
	app_metadata: AppMetadata;
	user_metadata: IdentityDataOrUserMetadata;
	identities?: IdentitiesEntity[] | null;
	created_at: string;
	updated_at: string;
	is_anonymous: boolean;
}
interface AppMetadata {
	provider: string;
	providers?: string[] | null;
}
interface IdentityDataOrUserMetadata {
	email: string;
	email_verified: boolean;
	phone_verified: boolean;
	sub: string;
}
interface IdentitiesEntity {
	identity_id: string;
	id: string;
	user_id: string;
	identity_data: IdentityDataOrUserMetadata;
	provider: string;
	last_sign_in_at: string;
	created_at: string;
	updated_at: string;
	email: string;
}

class Auth {
	user: User | null = $state();
	isOpen: boolean = $state(false);
	showPanel() {
		this.isOpen = true;
	}
	closePanel() {
		this.isOpen = false;
	}
	userId() {
		return this.user?.id;
	}
	userMail() {
		return this.user?.email;
	}
	signIn(obj: User) {
		this.user = obj;
	}
	signOut() {
		this.user = null;
	}
}

export const auth = new Auth();

export const signOut = async () => {
	const { error } = await supabase.auth.signOut();
	if (error) throw new Error('Logout Error');
	return true;
};
