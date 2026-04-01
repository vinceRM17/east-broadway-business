"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

async function getSupabase() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); } catch { /* Server Component */ }
        },
      },
    }
  );
}

export async function submitEvent(formData: FormData) {
  const supabase = await getSupabase();

  const { error } = await supabase.from("events").insert({
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    date: formData.get("date") as string,
    time: formData.get("time") as string,
    location: formData.get("location") as string,
    category: formData.get("category") as string,
    submitted_by: formData.get("submitted_by") as string,
    submitted_email: formData.get("submitted_email") as string,
  } as Record<string, unknown>);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function submitInquiry(formData: FormData) {
  const supabase = await getSupabase();

  const { error } = await supabase.from("membership_inquiries").insert({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || null,
    business_name: (formData.get("business_name") as string) || null,
    message: (formData.get("message") as string) || "",
    type: formData.get("type") as string,
  } as Record<string, unknown>);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
