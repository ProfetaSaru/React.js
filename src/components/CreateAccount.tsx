function CreateAccount() {
    return (
        <div className="card align-self-center" style={{ width: "35rem" }}>
            <div className="card-body">
                <h5 className="card-title">Criar Conta</h5>
                <div className="mb-3">
                    <label className="form-label">Example label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Another label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;