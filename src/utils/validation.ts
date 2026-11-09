export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    return { isValid: false, message: "Email is required." };
  }

  if (!emailRegex.test(email)) {
    return { isValid: false, message: "Enter a valid email address." };
  }

  return { isValid: true, message: "" };
};

export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, message: "Password is required." };
  }

  if (password.length < 8) {
    return {
      isValid: false,
      message: "Password must contain at least 8 characters.",
    };
  }

  return { isValid: true, message: "" };
};

export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { isValid: false, message: "Name is required." };
  }

  if (name.trim().length < 2) {
    return { isValid: false, message: "Name must contain at least 2 characters." };
  }

  return { isValid: true, message: "" };
};