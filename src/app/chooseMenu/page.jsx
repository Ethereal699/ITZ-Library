'use client'
import ElementMenu from "../components/chooseMenu/Menu";
import Header from "../components/get-started/Header";


export default function page(){
    return (
    <> 
        <Header />
          <main>
           <ElementMenu/>
          </main>
        </>
      );
    }
