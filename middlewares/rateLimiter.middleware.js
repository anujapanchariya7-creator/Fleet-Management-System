const requests ={};
export const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    if (!requests[ip]) {
        requests[ip] = [];
    }
    requests[ip] = requests[ip].filter(timestamp => now - timestamp < 60000);

    if (requests[ip].length >= 3) {
        return res.status(429).json({ message: 'Too many requests, please try again later.' });
    }
    requests[ip].push(now);
    next();
}