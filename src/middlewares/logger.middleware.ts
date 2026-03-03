import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`coming ${req.method} ${req.url}`);
        next();
        console.log(`leaving ${req.method} ${req.url}`);
    }
}