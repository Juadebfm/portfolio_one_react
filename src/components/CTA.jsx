import React from "react";
import Button from "./lcomp/Button";

const CTA = () => {
  return (
    <section className="CTA">
      <div className="">
        <h2>Have any project in mind ?</h2>
        <p>Feel free to contact me or just say friendly hello!</p>
      </div>

      <div>
        <Button className="btn_bg" btnText="Contact Me" />
      </div>
    </section>
  );
};

export default CTA;
