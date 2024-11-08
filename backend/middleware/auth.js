const authenticateToken = (req, res, next) => {
  // Check if user is authenticated (replace this logic with your own authentication check)
  if (req.isAuthenticated && req.isAuthenticated()) {
    req.user = req.session.user;  // Ensure `req.session.user` contains `userId`
    next();
  } else {
    res.status(401).json({ message: 'Access denied. Authentication required.' });
  }
};

module.exports = { authenticateToken };
