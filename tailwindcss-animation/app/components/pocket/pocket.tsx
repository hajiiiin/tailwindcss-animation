import Card from "./card";

const reviews = [
  {
    id: 1,
    review: "⭐⭐⭐⭐⭐",
    title: "Screw financial advisors.",
    text: "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
    user: "JordanBelfort1962",
  },
  {
    id: 2,
    review: "⭐⭐⭐⭐",
    title: "Bought an island.",
    text: "Yeah, you read that right. Want your own island too? Get Pocket.",
    user: "ScroogeMcduck",
  },
  {
    id: 3,
    review: "⭐⭐⭐",
    title: "No more debt!",
    text: "After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?",
    user: "BruceWayne",
  },
  {
    id: 4,
    review: "⭐⭐⭐⭐⭐",
    title: "Wish I could give 6 stars",
    text: "This is literally the most important app you will ever download in your life.",
    user: "SarahLuvzCash",
  },
  {
    id: 5,
    review: "⭐⭐⭐⭐",
    title: "Started an investment firm.",
    text: "I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!",
    user: "TheCountOfMonteChristo",
  },
];

export default function pocket() {
  return (
    <div>
      <div className="bg-gradient-marquee">dddd</div>
      <main className="h-[49rem] overflow-hidden bg-gray-50 p-8 max-w-7xl mx-auto flex space-x-8 ">
        {/* 애니메이션 컨테이너 */}
        <div
          className="relative animate-marquee-up-slow"
          style={{ animationDelay: "0" }}
        >
          {reviews.map((review, index) => (
            <div key={review.id}>
              <Card>
                <Card.Content>
                  <Card.Review>{review.review}</Card.Review>
                  <Card.Title>{review.title}</Card.Title>
                  <Card.Text>{review.text}</Card.Text>
                  <Card.Description>{review.user}</Card.Description>
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
        {/* 두 번째 줄 */}
        <div
          className="relative animate-marquee-up-slow"
          style={{ animationDelay: "2" }}
        >
          {reviews.map((review) => (
            <Card key={`medium-${review.id}`}>
              <Card.Content>
                <Card.Review>{review.review}</Card.Review>
                <Card.Title>{review.title}</Card.Title>
                <Card.Text>{review.text}</Card.Text>
                <Card.Description>{review.user}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
