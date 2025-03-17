import Info from "../model/info.js";

export const saveInfo = async (req, res, next) => {
    try {
        const result = await new Info(req.body).save()
        if (result) {
            res.status(200).json({ msg: "Info Save successfully" })
        } else {
            res.status(200).json({ msg: "Unable to Save" })
        }
    } catch (error) {
        console.log(error);
        next()
    }
}