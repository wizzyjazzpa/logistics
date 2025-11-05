import { Request,Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";


export const authMiddleware = (req:Request,res:Response,next:NextFunction)=>{
      const token = req.cookies.token;
      if(!token){
          return res.redirect('/Admin_login');
      }
      const decoded = verifyToken(token);
      if(!decoded){
           res.clearCookie("token");
          return res.redirect('Admin_login');
                
      }
      (req as any).user =decoded;
      next();
}