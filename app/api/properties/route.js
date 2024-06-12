import connectDB from "@/config/db";

export const GET = async (req) => {
    try {
        await connectDB();
        return new Response(JSON.stringify({msg: "Hello"}), { status: 200 })
    } catch (error) {
        console.error(error);
        return new Response("Error", { status: 500 })
    }

};
