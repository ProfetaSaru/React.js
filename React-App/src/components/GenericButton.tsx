function GenerateButton(
    Text: string,
    Active: boolean,
    Link?: string
) {
    return (
            <li className="nav-item">
                <a className={Active ? 'nav-link active' : 'nav-link'} href={Link}>
                  {Text}
                </a>
            </li>
    );
}

export default GenerateButton