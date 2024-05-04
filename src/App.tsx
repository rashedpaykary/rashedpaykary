import Card from "./components/Card/Card";
import Layout from "./components/Layout/Layout";
import { courses } from "./data/course";

function App() {
  return (
    <Layout>
      <div className="flex flex-wrap gap-3">
        {/* // method1 map((item) => {
          return(<Card />)
        } // => (<Card />)correct => Because anything inside the parentheses has the return command for the array ) */}
        {courses.map((item, index) => {
          const isOpen = !!(index % 2);
          return (
            <Card
              key={item.id} //uniq -
              title={item.title}
              image={item.img}
              discription={item.description}
              info={item.info}
              action={() => alert(isOpen ? item.title : "end")}
              isOpen={isOpen}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default App;

// method 2
//  <Card
// title="Node JS"
// discription="از بهترین انتخاب‌ها برای سرمایه‌گذاری روی مهارت‌"
// info=" 28 هفته | 300 ساعت آموزش"
// action={() => alert("Node")/>
