const createRequest = async (url, path) => {
    try {
        const request = await fetch(url + path);

        return await request.json();
    } catch (error) {
        throw new Error(error);
    }
};

export default createRequest;