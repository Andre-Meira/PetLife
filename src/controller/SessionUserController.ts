import {Request, Response} from "express";
import {config} from '../config';
import { userdb } from "../models/db/ConnectionPostgres";
import { ApiService} from "./ApiService";

class SessionUserController extends ApiService{
    
    constructor(){
        super();                
    }

    public AuthUser(req: Request, res:Response) : Response {            
        new userdb().teste();

        return super.FailRequest({
            res:res,
            mensagem:'Erro',
            status:400
        });
    }

    public testeUser(req: Request, res:Response) : Response{
        let user: string = req.query.user as string;            
        let password :string =  req.query.password as string;        
    
                    
        return res.json('teste');        
    }

}

export const sessionUserController = new SessionUserController();