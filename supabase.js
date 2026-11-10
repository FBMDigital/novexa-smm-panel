
const SUPABASE_URL = "https://ydklbpodbmamwdzdvhld.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_Yb4mcpijdPAhLdFNWjyspw_uXR5bq0I";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

window.novexaSupabase = supabaseClient;
