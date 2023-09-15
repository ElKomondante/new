import { Input } from "./components";
import { Area } from "./components";
import { Menu } from "./components/MenuHamburger";
import { Sign } from "./components/SignIn";
import { Username } from "./components/Username";
import { HOCUsage } from "./components/HOC";
import { Tabs } from "./components/Tabs";
import { Success } from "./components/Success";
import { NewSign } from "./components/NewSign"


const App = () => {
  return (
    <>
    <div>
      <Sign/>
    </div>
    <div style={{width: '50%', backgroundColor: '#ededed', margin: '100px auto'}}>
      <Input title="Title" placeholder="Placeholder"/>
    </div>
    <div style={{width: '50%', backgroundColor: '#ededed', margin: '100px auto'}}>
      <Area/>
    </div>
    <div>
      <Username/>
    </div>
      <Menu/>
      <Tabs/>
      <Success/>
      <NewSign  title="Email" placeholder="Email"/>
      
    </>
  );
  }

export { App };
