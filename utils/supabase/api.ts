import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

/**
 * Lightweight Supabase client for use in API routes (server-side).
 * Unlike createBrowserClient, this doesn't depend on document.cookie.
 */
export const createApiClient = () =>
    createSupabaseClient(supabaseUrl, supabaseKey);
