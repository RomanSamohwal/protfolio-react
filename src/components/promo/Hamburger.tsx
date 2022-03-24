import React from "react";

type HamburgerProps = {
    onActiveMenuClick: () => void
}

export const Hamburger: React.FC<HamburgerProps> = ({onActiveMenuClick}) => {
    return <div className="hamburger" onClick={onActiveMenuClick}>
        <span/>
        <span className="long"/>
        <span/>
    </div>
}