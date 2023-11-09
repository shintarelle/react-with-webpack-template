import React from 'react';
import styles from './styles.scss';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Section2 from './components/section2';



const onClickEvent = (e) => {
    e.preventDefault();
    alert('You Clicked Me!')
}

const App = () => {
    return (
        <>
            <Header />
            <MainSection />
            <Section2 />

            {/* <div className={styles.content}>
                <div className={styles.label}>
                    Create React App Without CRA😊
                </div>
                <button className={styles.btn} onClick={onClickEvent}>Click Me 😎</button>
            </div> */}
        </>
    )
}

export default App
