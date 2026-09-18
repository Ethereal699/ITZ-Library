'use client'
import Header from "./main_page/Header";
import Hero from "./main_page/Hero";
import CustomCursor from "./components/catalog/Cursor";
export default function Page() {

return (

<> 
<CustomCursor/>
    <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}