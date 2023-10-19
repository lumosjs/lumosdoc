import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/home'; 
import Docs from "./pages/docs"
import Intro from "./pages/docs/intro"
import Navigation from "./Menu"
import Installation from "./pages/docs/installation"
import Env from "./pages/docs/env";
import Routers from "./pages/docs/route"
import Controller from "./pages/docs/controller";
import Service from "./pages/docs/service";
import Model from "./pages/docs/model";
import Middleware from "./pages/docs/middleware";
import Response from "./pages/docs/response";
import Uploads from "./pages/docs/upload";
import Session from "./pages/docs/session";
import Validation from "./pages/docs/validation";
import Security from "./pages/docs/security";
import Testing from "./pages/docs/testing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="docs" element={<Docs />}>
            <Route index element={<Intro />} />
            <Route path="/docs/installation" element={<Installation />}/>
            <Route path="/docs/env" element={<Env />}/>
            <Route path="/docs/routes" element={<Routers />}/>
            <Route path="/docs/controller" element={<Controller />}/>
            <Route path="/docs/service" element={<Service />}/>
            <Route path="/docs/model" element={<Model />}/>
            <Route path="/docs/middleware" element={<Middleware />}/>
            <Route path="/docs/model" element={<Model />}/>
            <Route path="/docs/response" element={<Response />}/>
            <Route path="/docs/upload" element={<Uploads />}/>
            <Route path="/docs/session" element={<Session />}/>
            <Route path="/docs/validation" element={<Validation />}/>
            <Route path="/docs/security" element={<Security />}/>
            <Route path="/docs/testing" element={<Testing />}/>
            </Route>  
        </Route>
      </Routes>
</BrowserRouter>

  );
}

export default App;
