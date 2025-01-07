import mongoose from "mongoose"

(
    async () => {
        try {
            mongoose.connect(`${process.env.MONGODB_URL}`)
        } catch (error) {
            
        }
    }
)()