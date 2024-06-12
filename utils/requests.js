const apiBase = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
    if (!apiBase) {
        return [];
    }
    try {
        const res = await fetch(`${apiBase}/properties`);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export {
    fetchProperties,
};
