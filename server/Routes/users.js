import { Router } from "express";
import banner from "../Models/Banner.js";


const router = Router()

router.get("/home-banner", async (req, res) => {
    const banners = await banner.find();
    res.json(banners)
})

export default router