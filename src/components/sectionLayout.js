import React from "react";

const SectionLayout = (props) => {
    return (
              <section className={props.name}>
                  <div className="container">
                      <div className="content">
                              {props.children}
                      </div>
                  </div>
              </section>
    )
}
export default SectionLayout