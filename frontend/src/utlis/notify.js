/**
 * Notification utility for displaying toast messages
 */

/**
 * Display a success notification
 * @param {string} message - The message to display
 */
export const notifySuccess = (message) => {
  // For now, use alert - can be replaced with toast library later
  alert(message);
};

/**
 * Display an error notification
 * @param {string} message - The error message to display
 */
export const notifyError = (message) => {
  alert(`Error: ${message}`);
};

export default {
  success: notifySuccess,
  error: notifyError,
};
