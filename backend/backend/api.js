import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wqutefokqwfjdnqmscpl.supabase.co";
const supabaseKey = "sb_publishable_3PM9YClLenyIw7DsQ8SaYg_EdRy1ydE";

export const supabase = createClient(supabaseUrl, supabaseKey);
