import React, { Children } from "react";

export interface CardProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// 상위 Card 컴포넌트
const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 p-6 rounded-3xl mb-4 shadow-md hover:shadow-lg transition-shadow bg-white">
      {children}
    </div>
  );
};

// Card.Content 컴포넌트
const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col items-start gap-4 py-2">{children}</div>;
};

// Card.Review 컴포넌트
const Review = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col items-start py-2">{children}</div>;
};

// Card.Title 컴포넌트
const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="line-clamp-2 text-xl font-bold text-gray-900">{children}</h2>
  );
};

const Text = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

// Card.Description 컴포넌트
const Description = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-gray-700">{children}</p>;
};

// 정적 속성으로 등록
Card.Content = Content;
Card.Review = Review;
Card.Title = Title;
Card.Text = Text;
Card.Description = Description;

export default Card;
