import express from "express";
const router = express.Router();
router.get("/health-techstore", (req, res) => {
    res.status(200).json({ messagem: "Conexão com API realizada com sucesso..." });
});
export default router;
//# sourceMappingURL=TestConectionController.js.map