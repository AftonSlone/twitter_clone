export interface newCheep {
  content: string;
  image: File | null;
}

export interface loginCredentials {
  email: string;
  password: string;
}

export interface signupInfo {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}