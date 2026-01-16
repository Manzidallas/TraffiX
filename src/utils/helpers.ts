// Utility functions

/**
 * Get current date and time in UTC formatted as YYYY-MM-DD HH:MM:SS
 */
function getCurrentDateTime() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

/**
 * Generate a random integer between min and max
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Format a date to a readable string
 * @param {Date} date - Date object
 */
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

export { getCurrentDateTime, getRandomInt, formatDate };