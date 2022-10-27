import { useEffect } from 'react';
import { useState } from 'react';
import { Item } from './Item';
import menu from './items.json';
import styles from "./Items.module.scss";

interface Props {
    search: string;
    filter: number | null;
    orderer: string;
}

export function Items(props: Props) {
    const [list, setList] = useState(menu);
    const { search, filter, orderer } = props;


    function testSearch(title: string) {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }

    function testFilter(id: number) {
        if(filter !== null) return filter === id;
        return true;
    }

    function order(newList: typeof menu) {
        switch(orderer) {
            case 'size':
                return newList.sort((a, b) => a.size > b.size ? 1 : -1);
            case 'serving':
                return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
            case 'price':
                return newList.sort((a, b) => a.price > b.price ? 1 : -1);
            default:
                return newList;
        }
    }

    useEffect(() => {
        const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(order(newList));
    }, [search, filter, orderer]);


    return (
        <div className={styles.items}>
            {list.map(item => (
                <div>
                    <Item key={item.id} {...item} />
                </div>
            ))}
        </div>
    )
}