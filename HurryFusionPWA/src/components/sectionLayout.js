import React from "react";

const SectionLayout = (props) => {

    return (
        <>
            <section className={props.name}>
                <div className="container">
                    <div className="content">
                        <div className="row">
                            {props.children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};



export default SectionLayout