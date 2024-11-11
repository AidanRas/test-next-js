import Head from "next/head";
import styles from '../styles/Home.module.css';
import Searchbar from "../components/searchbar";

export default function Store() {
    return (
        <>
        <div className={styles.fakestore}>
            <h1>Fake Store</h1>
            <p>Welcome to the fake store</p>
            <p>Here you will find a variety of products</p>
            <Searchbar />
        </div>
        </>
    )
}