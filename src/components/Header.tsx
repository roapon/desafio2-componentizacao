interface HeaderProps {
    categoryName: string
}

export function Header(props: HeaderProps) {
    return (
        <header>
            <span className="category">Categoria:<span> {props.categoryName}</span></span>
        </header>
    )
}
