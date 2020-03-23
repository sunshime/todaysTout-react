import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* 元素中的内容对于文档来说应当是唯一的。它不应包含在文档中重复出现的内容，比如侧栏、导航栏、版权信息、站点标志或搜索表单。 */}
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
