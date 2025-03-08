import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

    // Get query parameters
    const query = getQuery(event);
    const table = query.table;

    // Ensure table is provided
    if (!table) {
        return { error: "Table name is required" };
    }

    // Fetch data from the specified table
    const { data, error } = await supabase.from(table as string).select("*");

    if (error) {
        return { error: error.message };
    }

    return { data };
});