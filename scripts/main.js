const render = () => {
  const container = document.getElementById("container");
  container.innerHTML = `
        <h1>Solar System Mining Market</h1>
            <section id="userSelections">
                <div id="selections">\${}</div> <!--choose governor & choose facility dropdowns-->
                <div id="resources">\${}</div> <!--display available resources-->
            </section>
            <section id="shop">
                <div id="minerals">\${}</div> <!--show facility minerals with radio buttons-->
                <div id="cart">\${}</div> <!--display cart and purchase button-->
            </section>
    `;
};

render();
