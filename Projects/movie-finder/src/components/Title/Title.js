import React from "react";

export const Title = (props) => {
    return (
        <div className="Title">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.subtitle}</h2>
        </div>
    );
}