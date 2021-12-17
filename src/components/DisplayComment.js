import styles from "./CSS/DisplayComment.module.css"

function DisplayComment(props){
    const user_name = props.user_name
    const timestamp = props.timestamp
    const user_comment = props.user_comment
    return (
        <div className={styles.container}>
            <h3>{user_name}</h3>
            <p>{timestamp}</p>
            <h3>{user_comment}</h3>


        </div>
    )

}
export default DisplayComment