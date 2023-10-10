import ButtonStyle from './Button.module.css'

function Click (ev){
    console.log(ev)
    alert ('Voce Clicou')
}

function Button (props){
    return(
    <div>
        <button
        className={ButtonStyle.btn}
        onClick={Click}
        >
           {props.text}
        </button>
    </div>
    )
}

export default Button