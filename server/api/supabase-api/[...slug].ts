import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
    const { slug: table } = event.context.params || {}; // Extract slug properly
    const config = useRuntimeConfig();
    const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

    if (!table) {
        return { error: "Table name is required" };
    }

    // Get query parameters for filtering
    const query = getQuery(event);
    let filters = {};

    if (query.filters) {
        try {
            filters = JSON.parse(query.filters as string); // Ensure it's an object
        } catch (e) {
            return { error: "Invalid filters format" };
        }
    }

    // Fetch data from the specified table with filtering
    const { data, error } = await supabase.from(table).select("*").match(filters);

    if (error) {
        return { error: error.message };
    }

    return { data };
});