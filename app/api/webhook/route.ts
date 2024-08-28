import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
  const authToken = request.headers.get("authorization");

  if (authToken !== process.env.STRAPI_AUTH_TOKEN) {
    return new Response(null, { status: 401 });
  }

  const body: unknown = await request.json();

  if (body && typeof body === "object" && "model" in body) {
    console.log(`model`, body.model);
    if (body.model === "main-page") revalidatePath(`/`);

    return new Response(null, { status: 204 });
  } else {
    return new Response(null, { status: 400 });
  }
}
