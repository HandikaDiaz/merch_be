import { Response } from "express";
import { CustomRequest } from "../libs/request";
import * as profileService from '../services/profile.service'
import uploader from "../libs/cloudinary";

export async function updateProfie(req: CustomRequest, res: Response) {
    try {
        const body = req.body;
        const user = req.user.id;
        if(req.file) {
            body.image = await uploader(req.file as Express.Multer.File);
        }
        await profileService.updateProfie(body, user);
        res.json({ message: "Profile updated" });
    } catch (error) {
        console.log(error)
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}