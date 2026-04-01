"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

async function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(`Supabase not configured: URL=${!!url}, KEY=${!!key}`);
  }

  const cookieStore = await cookies();
  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Server Component — can't set cookies
        }
      },
    },
  });
}

export async function submitEvent(formData: FormData) {
  try {
    const supabase = await getSupabase();

    const payload = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
      location: formData.get("location") as string,
      category: formData.get("category") as string,
      submitted_by: formData.get("submitted_by") as string,
      submitted_email: formData.get("submitted_email") as string,
    };

    console.log("[submitEvent] inserting:", payload.title);

    const { error } = await supabase
      .from("events")
      .insert(payload as Record<string, unknown>);

    if (error) {
      console.error("[submitEvent] Supabase error:", error.message);
      return { success: false, error: error.message };
    }

    console.log("[submitEvent] success");
    return { success: true };
  } catch (err) {
    console.error("[submitEvent] exception:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

export async function submitInquiry(formData: FormData) {
  try {
    const supabase = await getSupabase();

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || null,
      business_name: (formData.get("business_name") as string) || null,
      message: (formData.get("message") as string) || "",
      type: formData.get("type") as string,
    };

    console.log("[submitInquiry] inserting:", payload.name, payload.type);

    const { error } = await supabase
      .from("membership_inquiries")
      .insert(payload as Record<string, unknown>);

    if (error) {
      console.error("[submitInquiry] Supabase error:", error.message);
      return { success: false, error: error.message };
    }

    console.log("[submitInquiry] success");
    return { success: true };
  } catch (err) {
    console.error("[submitInquiry] exception:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
