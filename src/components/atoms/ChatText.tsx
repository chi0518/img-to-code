import * as React from "react";

interface ChatTextProps {
  tagMessage: string;
}

const ChatText = ({ tagMessage }: ChatTextProps) => {
  const messageText = () => {
    switch (tagMessage) {
      case "Input":
        return "input 태그로 바꿔주고 input에 스타일을 넣어줘 텍스트는 placeholder로 넣어줘";
      case "Select":
        return "select 태그로 바꿔주고 텍스트는 옵션으로 넣어줘";
      case "Checkbox":
        return "img태그는 checkbox 태그로 바꿔주고 스타일을 적용해줘";
      case "Radio":
        return "img태그는 checkbox 태그로 바꿔주고 스타일을 적용해줘";
      case "Textarea":
        return "";
      case "Button":
        return "";
      case "Pagination":
        return "";
      case "Calendar":
        return "";
    }
  };

  return (
    <p className="bg-gray-100 rounded my-10 p-3 italic">{messageText()}</p>
  );
};
export default ChatText;
