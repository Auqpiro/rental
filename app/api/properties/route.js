import connectDB from "@/config/db";
import Property from "@/models/Property";

export const GET = async (req) => {
    try {
        await connectDB();
        const properties = await Property.find({});
        return new Response(JSON.stringify(properties), { status: 200 })
    } catch (error) {
        console.error(error);
        return new Response("Error", { status: 500 })
    }

};
