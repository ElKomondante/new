import { Input } from "./components";
import { Area } from "./components";
import { Menu } from "./components/BurgerMenu";
import { Sign } from "./components/SignIn";
import { Username } from "./components/Username";
import { HOCUsage } from "./components/HOC";
import { Tabs } from "./components/Tabs";
import { Success } from "./components/Success";
import { NewSign } from "./components/NewSign"
import { SelectPost } from "./components/SelectPost"
import { AllPost } from "./components/AllPost";
import { BurgerMenu } from "./components/Hamburger";
import { HomePage } from "./components/HomePage";
import { FourPosts } from "./components/FourPosts";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThreePosts } from "./components/ThreePosts";



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'}>
        <Route index element={<ThreePosts />} />
        <Route path="allpost" element={<AllPost />} />
        <Route path="fourposts" element={<FourPosts />} />
        <Route path="signin" element={<Sign />} />
        <Route path="form" element={<Input title="Title" placeholder="Placeholder" />} />
        <Route path="menu" element={<Menu />} />
        <Route path="success" element={<Success />} />
        <Route path="newsignin" element={<NewSign  title="Email" placeholder="Email" />} />
        <Route path="tab" element={<Tabs />} />
        <Route path="selectpost" element={<SelectPost />} />
      </Route>
    </Routes>
  </BrowserRouter>


    // <>
    // <div>
    //   <Sign/>
    // </div>
    // <div style={{width: '50%', backgroundColor: '#ededed', margin: '100px auto'}}>
    //   <Input title="Title" placeholder="Placeholder"/>
    // </div>
    // <div style={{width: '50%', backgroundColor: '#ededed', margin: '100px auto'}}>
    //   <Area/>
    // </div>
    // <div>
    //   <Username/>
    // </div>
    //   <Menu/>
    //   <Tabs/>
    //   <Success/>
    //   <NewSign  title="Email" placeholder="Email"/>
    //   <SelectPost/>
    //   <AllPost/>
    // </>
  );
  }

export { App };
