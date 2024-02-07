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
        return "img태그는 Input태그에 checkbox type으로 바꿔주고 이미지대로 스타일을 적용해줘";
      case "Radio":
        return "img태그는 Input태그에 Radio type으로 바꿔주고 이미지대로 스타일을 적용해줘";
      case "Textarea":
        return "img태그는 textarea 태그로 바꿔주고 이미지 대로 스타일을 적용해줘, 텍스트는 placeholder로 변경해줘";
      case "Button":
        return "버튼 태그로 바꿔주고 이미지대로 스타일을 적용해줘, 마우스 올렸을때는 파란색 배경색과 흰색 글씨로 스타일을 적용해줘";
      case "Pagination":
        return "페이지네이션 코드로 변환해주고 tailwind 스타일을 적용해줘";
      // case "Calendar":
      //   return "";
    }
  };

  return (
    <div className="my-10">
      <p>Script</p>
      <p className="bg-gray-100 rounded my-2 p-3 italic">{messageText()}</p>
    </div>
  );
};
export default ChatText;
