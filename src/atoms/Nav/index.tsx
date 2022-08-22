import "./Nav.scss";
const Nav = () => {
  let tabs = ["Dashboard", "Prevention", "Symptoms", "Contact us"];
  return (
    <div className="nav--wrapper">
      <div className="nav--container content">
        <h1 className="text-[#316d0c] font-[900] text-[24px]">COVID 19</h1>
        <div className="flex">
          {tabs.map((tab, index) => {
            return (
              <div
                className={`${
                  index == 0 ? "text-[#316d0c]" : "text-black"
                } px-4 font-bold cursor-pointer hover:text-[#316d0c]`}
                key={index}
              >
                {tab}
              </div>
            );
          })}
        </div>
        <button className="button">Report a Case</button>
      </div>
    </div>
  );
};

export default Nav;

// src="https://www.knowcovid19.ng/images/logo.png"
