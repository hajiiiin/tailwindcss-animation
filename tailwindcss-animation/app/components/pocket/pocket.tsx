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
    <main className="overflow-hidden bg-gray-100 p-8 max-w-7xl mx-auto">
      {/* 애니메이션 컨테이너 */}
      <div className="relative animate-marquee-up-medium">
        {/* Grid 컨테이너 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          {/* 무한 반복을 위해 동일한 데이터를 한 번 더 추가 */}
          {reviews.map((review) => (
            <div key={`duplicate-${review.id}`}>
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
      </div>
      {/* 두 번째 줄: 느린 속도 */}
      <div className="relative animate-marquee-up-slow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </main>
  );
}
