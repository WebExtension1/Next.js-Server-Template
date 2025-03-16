import express from "express";
import pool from "../db.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
    try {
        const { example } = req.body;

        const [result] = await pool.execute(`
            SQL
        `, [example]
        );

        res.json(result);
    }
    catch (error) {
        next(error);
    }
});

export default router;