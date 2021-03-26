import { api } from "./api"

const get = async () => {
    const data = await api({
        method: "get",
        url: "/movie",
    });

    console.log(data);
};

export { get };