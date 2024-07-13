import { Router } from "express";
import admin from "../Models/admin.js";
import banner from "../Models/Banner.js";


const router = Router()

router.get("/", (req, res) => {
    res.json("working")
})

router.post("/register", async (req, res) => {
    const newAdmin = await admin.create(req.body)
    res.json(newAdmin)
})

// add banner

router.post("/add/banner", async (req, res) => {
    const newBanner = await banner.create(req.body)
    res.json(newBanner)
})

export default router