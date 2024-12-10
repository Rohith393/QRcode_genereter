import express from "express";
import QRCode from "qrcode";

const router = express.Router();

router.post('/api/users/getqrcode', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ message: "Bad request: URL is required" });
    }

    try {
        QRCode.toDataURL(url, (err, qrcodeurldata) => {
            if (err) {
                return res.status(500).json({ message: "Internal server error" });
            } else {
                res.status(200).json({ message: "QR code generated successfully", qrcodeurldata });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error generating QR code" });
    }
});

export default router;
