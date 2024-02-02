import * as React from "react";

interface ChatTextProps {
  text: string;
}

const ChatText = ({ text }: ChatTextProps) => {
  return <p className="bg-gray-100 rounded my-2 p-3 italic">{text}</p>;
};
export default ChatText;
