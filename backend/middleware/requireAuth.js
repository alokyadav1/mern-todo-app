import jwt from 'jsonwebtoken';
const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({message:'Unauthorized'});
    }
    // const token = authorization.split(' ')[1];
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDdjZDk1YWE1YWFmNmFmZDU1MjQ3ZiIsImlhdCI6MTY3Njk3NDc5NiwiZXhwIjoxNjc3MjMzOTk2fQ.PgU6XLlMiaXd9F2pC0GYylSbtD8ByIXcC5Lsys1Pvvw"
    console.log("token",token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        req.token = token;
        console.log(req.user);
        next();
    } catch (error) {
        console.log("requireAuth");
        console.log("requireAuth", error.message);
        return res.status(500).json({message:error.message});
    }
}
export default requireAuth;