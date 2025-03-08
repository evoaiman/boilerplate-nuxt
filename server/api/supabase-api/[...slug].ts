import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);
    const { slug: table } = event.context.params || {}; // Extract table name from params
    
    if (!table) {
        return { error: "Table name is required" };
    }

    const method = getMethod(event);
    const query = getQuery(event);
    let filters = {};

    if (query.filters) {
        try {
            filters = JSON.parse(query.filters as string); // Ensure filters are an object
        } catch (e) {
            return { error: "Invalid filters format" };
        }
    }

    try {
        if (method === "GET") {
            const { data, error } = await supabase
                .from(table)
                .select("*")
                .match(filters)
                .range(query.start as number || 0, query.end as number || 9); // Pagination support
            if (error) throw error;
            return { data };
        }

        if (method === "POST") {
            const body = await readBody(event);
            const { data, error } = await supabase.from(table).insert(body);
            if (error) throw error;
            return { data };
        }

        if (method === "PUT") {
            const body = await readBody(event);
            const { data, error } = await supabase
                .from(table)
                .update(body)
                .match(filters);
            if (error) throw error;
            return { data };
        }

        if (method === "DELETE") {
            const { data, error } = await supabase.from(table).delete().match(filters);
            if (error) throw error;
            return { data };
        }

        return { error: "Unsupported HTTP method" };
    } catch (err) {
        return { error: (err as Error).message };
    }
});
