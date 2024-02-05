import * as React from "react";

interface ChatTextProps {
  tagMessage: string;
}

const ChatText = ({ tagMessage }: ChatTextProps) => {
  const messageText = () => {
    switch (tagMessage) {
      case "Select":
        return "select 태그로 바꿔주고 텍스트는 옵션으로 넣어줘";
    }
  };

  return <p className="bg-gray-100 rounded my-2 p-3 italic">{messageText()}</p>;
};
export default ChatText;
