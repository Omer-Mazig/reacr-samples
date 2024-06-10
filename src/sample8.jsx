import React, { useEffect, useRef } from "react";

function Sample8() {
  console.log("APP RENDER");
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const isActiveRef = useRef(true);

  // console.log(firstNameRef);
  // console.log(lastNameRef);

  function log() {
    console.log("hshs");
  }

  useEffect(() => {
    firstNameRef.current.focus();
    firstNameRef.current.addEventListener("click", log);

    return () => firstNameRef.current.removeEventListener("click", log);
  }, []);

  function onSubmit(ev) {
    ev.preventDefault();
    // console.log("Submitting form...");

    console.log(firstNameRef.current.value);
    console.log(lastNameRef.current.value);

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    firstNameRef.current.focus();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input ref={firstNameRef} id="firstName" type="text" />
        </div>

        <br />
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input ref={lastNameRef} id="lastName" type="text" />
        </div>

        <button disabled={isActiveRef.current}>Submit</button>
      </form>
    </div>
  );
}

export default Sample8;
