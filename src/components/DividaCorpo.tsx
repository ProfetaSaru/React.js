function dividaCorpo(Nome : string, Dividas : boolean) {
    return (
        <div className="container row">
            <div className="col">{`Olá ${Nome}, ${Dividas === true ? 'Você tem dividas' : 'Você não tem dividas'}`}</div>
        </div>
    )
}

export default dividaCorpo;