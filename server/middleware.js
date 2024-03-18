import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {

  const token = req.cookies.access_token;
  if (token == null) return res.sendStatus(401); // if there's no token

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // if the token is invalid
    req.user = user;
    next();
  });
};

export default authenticateToken;
