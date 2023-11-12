import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import {Request, Response} from 'express';
import { verify } from 'jsonwebtoken';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    
    const token = req.header('auth-user');
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized. Token missing.' });
    }
    try {
      const decodedToken = verify(token, 'token');
      
      const userId = (decodedToken as any).userId; 
      // Inject userId into the request object
      req['userId'] = userId; 

      next();
      
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized. Token is invalid.' });
    }
    
    
  }
}
