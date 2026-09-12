
export function sanitize(input) {
  if (!input) return '';
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}
export function isBot(honeypotField, timeToFillMs) {
  if (honeypotField) return true;
  if (timeToFillMs < 2000) return true;
  return false;
}
const rateLimiter = {
  timestamps: [],
  limit: 3,
  windowMs: 60 * 60 * 1000 
};
export function checkRateLimit() {
  const now = Date.now();
  rateLimiter.timestamps = rateLimiter.timestamps.filter(t => now - t < rateLimiter.windowMs);
  if (rateLimiter.timestamps.length >= rateLimiter.limit) {
    return false; 
  }
  rateLimiter.timestamps.push(now);
  return true;
}
