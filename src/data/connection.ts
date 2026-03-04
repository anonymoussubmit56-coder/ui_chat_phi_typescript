import type { IConnection } from "../types";

export const connection : IConnection = {
    url: "http://localhost:8000/",
    header: { "Content-Type": "application/json" }
}