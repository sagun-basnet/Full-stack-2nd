import jwt from "jsonwebtoken";
export const isAuth = (req, res, next) => {
  try {
    // Extract token from Authorization header
    const token = req.headers.authorization.split(" ")[1];

    const verify = jwt.verify(token, "secretkey");
    req.user = {
      user_id: verify.id, // Make sure your JWT includes this when created
      role_id: verify.role_id,
    };
    // Attach user role to the request object
    req.userRole =
      verify.role_id === 1
        ? "admin"
        : verify.role_id === 2
        ? "guider"
        : verify.role_id === 3
        ? "user"
        : null;

    if (!req.userRole) {
      return res.status(403).send({ message: "Unauthorized role" });
    }

    next(); // Proceed to the next middleware
  } catch (err) {
    res.status(401).send({ message: "Invalid Token", err });
  }
};

export const checkAdmin = (req, res, next) => {
  if (req.userRole === "admin") {
    next();
  } else {
    res.status(403).send({ message: "Forbidden: Insufficient permissions" });
  }
};
export const checkGuider = (req, res, next) => {
  if (req.userRole === "guider") {
    next();
  } else {
    res.status(403).send({ message: "Forbidden: Insufficient permissions" });
  }
};
export const checkUser = (req, res, next) => {
  if (req.userRole === "user") {
    next();
  } else {
    res.status(403).send({ message: "Forbidden: Insufficient permissions" });
  }
};

export const checkAdminOrGuider = (req, res, next) => {
  if (req.userRole && (req.userRole === "admin" || req.userRole === "guider")) {
    return next(); // User is either an admin or a guider → Proceed
  }
  return res.status(403).json({ message: "Access denied" }); // Unauthorized
};
