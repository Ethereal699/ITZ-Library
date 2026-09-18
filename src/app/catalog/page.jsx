import Header from "../components/get-started/Header";
import Module_page from "../components/catalog/Module_page";
import styles from "../styles/Mod_page.module.css";

export default function Page() {
return (

<> 
    <div className={styles.catalog_page}>
      <Header />
      <main className={styles.catalog_main}>
      <Module_page/>
      </main>
    </div>
    </>
  );
}
