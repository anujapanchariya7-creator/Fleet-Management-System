export const notFoundMiddleware = (req, res, next) => {
    res.status(404).send("This Request URL was not found on this server.");
};
export default notFoundMiddleware;