import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import MyAccount from "./routes/MyAccount";
import MyFavourites from "./routes/MyFavourites";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/favourites" element={<MyFavourites />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
