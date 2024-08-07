const cloudinary = require("../config/cloudinary")

const uploadimage = async (req, res) => {
    try {
        const image = req.body.file
        const email = "ksrinivassobhitkintali@gmail.com"
        const result = await cloudinary.uploader.upload(image,
            {
                upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
                resource_type: "image", public_id: `${email}propic`,
                allowed_formats: ['png', 'jpg', 'jpeg'],
                transformation: [
                    {
                        width: 1000,
                        height: 1000,
                        crop: "limit",
                    }
                ]
            }
        )
        console.log(result)
        res.status(200).json({ result, message: "Image recieved successfully" })
    } catch (error) {
        res.status(500).json(error)
    }
};
module.exports = uploadimage