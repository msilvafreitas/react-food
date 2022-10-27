import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { Search } from "./Search";
import { useState } from "react";
import { Filters } from "./Filters";
import { Orderer } from "./Orderer";
import { Items } from "./Items";

export function Menu() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [orderer, setOrderer] = useState("");
    return (
        <main>
            <nav className={styles.navbar}>
                <Logo height={40} />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Find your next reactive meal!
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Menu</h3>
                <Search
                    search={search}
                    setSearch={setSearch}
                />
                <div className={styles.menu__filters}>
                    <Filters filter={filter} setFilter={setFilter} />
                    <Orderer orderer={orderer} setOrderer={setOrderer} />
                </div>
                <Items search={search} filter={filter} orderer={orderer} />
            </section>
        </main>
    )
}