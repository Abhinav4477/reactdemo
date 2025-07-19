import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://abhinavdileep4429:zCLBNkmqP4VxEwVJ@cluster0.lidedag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Database Connected Successfully!")

    } catch (error) {

        console.log("Error Connecting to Database!", error)
        process.exit(1)

    }
}