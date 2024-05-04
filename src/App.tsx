import Card from "./components/Card/Card";

function App() {
  return (
    <div className="flex flex-wrap gap-3">
      <Card
        title="Node JS"
        discription="از بهترین انتخاب‌ها برای سرمایه‌گذاری روی مهارت‌"
        info=" 28 هفته | 300 ساعت آموزش"
        action={() => alert("Node")}
      />
    </div>
  );
}

export default App;
