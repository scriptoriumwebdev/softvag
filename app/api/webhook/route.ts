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
      console.log(`revalidate /`, body.entry);
      revalidatePath(`/`, "page");
    }
    if (body.model === "about-page") revalidatePath(`/o-firmie`, "page");
    if (body.model === "adaptation-page")
      revalidatePath(
        `/kodowania-i-adaptacje-funkcjonalnosci-samochodu`,
        "page"
      );
    if (body.model === "modification-page")
      revalidatePath(
        `/modyfikacje-oprogramowania-skrzyn-biegow-DSG-i-S-Tronic`,
        "page"
      );
    if (body.model === "faq-page")
      revalidatePath(`/pytania-i-odpowiedzi`, "page");
    if (body.model === "opinions-page") revalidatePath(`/opinie`, "page");
    if (body.model === "contact-page") revalidatePath(`/kontakt`, "page");
    if (body.model === "blog" && body.entry && "slug" in body.entry) {
      revalidatePath(`/blog/${body.entry.slug}`, "layout");
      revalidatePath(`/blog`, "page");
    }
    return new Response(null, { status: 204 });
  } else {
    return new Response(null, { status: 400 });
  }
}
