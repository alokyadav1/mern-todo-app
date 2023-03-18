import jwt from 'jsonwebtoken';
const requireAuth = async (req, res, next) => {
    console.log("requireAuth.js");
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({message:'Unauthorized'});
    }
    const token = authorization.split(' ')[1]+"";
    try {
        console.log("token: ", token);
        const decoded =  jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        req.token = token;
        console.log(req.user);
        next();
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
export default requireAuth;