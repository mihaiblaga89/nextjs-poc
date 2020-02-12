import {initNavigation, withFocusable} from '../spatialNavigation/src';
import Home from "../components/Home";
import Layout from "../components/Layout";
import "../styles/index.css";

initNavigation({
  debug: false,
  visualDebug: false,
});

const Index = () => {
  return (
    <Layout>
      <div id="outer-container" className="flex text-white min-h-screen">
        <div id="page-wrap" className="w-full">
          <div className="container mx-auto">
            <Home />
          </div>
        </div>
      </div>
    </Layout>
  )
};

// const But1 = withFocusable()(() => (<button className="w-48 h-48 bg-teal-600 m-32">1</button>))
// const But2 = withFocusable()(() => (<button className="w-48 h-48 bg-teal-600 m-32">2</button>))

// const Index = ({ setFocus }) => {
//   useEffect(() => {
//     setFocus('FOCUSABLE_COMPONENT');
//   }, [])
//   return (
//   <div id="outer-container" className="flex text-white min-h-screen">
//     <But1 onBecameFocused={console.log}/>
//     <But2 focusKey={'FOCUSABLE_COMPONENT'}/>
//   </div>
// )
// }

export default Index;
