import connectMongoDB from "../../../../libs/mongodb"
import Topic from "../../../../models/topic"

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json()
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, description })
    return NextResponse.json({message : "Topic updated"}, {status : 200})
}