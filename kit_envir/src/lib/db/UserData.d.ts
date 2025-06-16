export interface UserData {
	id: string;
	role: string;
	email: string;
	last_sign_in_at: string;
	user_metadata: UserMetadata;
}
export interface UserMetadata {
	name: string;
}

// {id,role,email,user_metadata}
