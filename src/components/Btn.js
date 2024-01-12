export default function Btn() {

const clickHandler = () => console.log('クリックされました')


    return(
        <button onClick={clickHandler}>
            クリック
        </button>
    );
};