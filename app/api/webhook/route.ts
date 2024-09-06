import { StrapiResponseModel } from "@/app/types";
import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
  const authToken = request.headers.get("authorization");

  if (authToken !== process.env.STRAPI_AUTH_TOKEN) {
    return new Response(null, { status: 401 });
  }

  const body: StrapiResponseModel = await request.json();

  if (body && typeof body === "object" && "model" in body) {
    console.log(`model`, body.model);
    if (body.model === "main-page") {
      revalidatePath(`/`, "layout");
      console.log(`revalidate`, body.model);
    }
    if (body.model === "about") {
      revalidatePath(`/o-firmie`);
      console.log(`revalidate`, body.model);
    }
    if (body.model === "adaptation-page") {
      revalidatePath(
        `/kodowania-i-adaptacje-funkcjonalnosci-samochodu`,
        "page"
      );
      console.log(`revalidate`, body.model);
    }

    if (body.model === "modification-page") {
      revalidatePath(
        `/modyfikacje-oprogramowania-skrzyn-biegow-DSG-i-S-Tronic`
      );
      console.log(`revalidate`, body.model);
    }

    if (body.model === "faq-page") {
      revalidatePath(`/pytania-i-odpowiedzi`);
      console.log(`revalidate`, body.model);
    }

    if (body.model === "opinions-page") {
      revalidatePath(`/opinie`);
      console.log(`revalidate`, body.model);
    }

    if (body.model === "contact-page") {
      revalidatePath(`/kontakt`);
      console.log(`revalidate`, body.model);
    }

    if (body.model === "blog" && body.entry && "slug" in body.entry) {
      revalidatePath(`/blog/${body.entry.slug}`, "layout");
      revalidatePath(`/blog`, "page");
      console.log(`revalidate`, body.model);
    }
    return new Response(null, { status: 204 });
  } else {
    return new Response(null, { status: 400 });
  }
}
