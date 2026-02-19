
export interface IConnection {
    url: string;
    header: {
        "Content-Type": string;
    }
}

export interface IChatMessage {
    role: "user" | "assistant";
    content: string;
}

export type ErrorData = {
  hasError: boolean;
  message: string;
}

export type Message = {
  role: "user" | "assistant";
  content: string;
};
export type ModelAnswer = {
  response: string;
};

