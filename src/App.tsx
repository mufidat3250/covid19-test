import "./App.scss";
import Nav from "./atoms/Nav";
import { useDispatch, useSelector } from "react-redux";
import getAll from "./services";
import { useEffect } from "react";
import { fetchData } from "../src/store/reducer";
import StatCard from "./atoms/statCard";

function App() {
  const data: any = useSelector<any>((state) => state.result);
  const dispatch = useDispatch();

  const getData = () => {
    return async (dispatch: any) => {
      const data = await getAll();
      dispatch(fetchData(data));
    };
  };
  useEffect(() => {
    dispatch(getData() as any);
  }, []);

  return (
    <div className="App">
      <Nav />

      <div className="mt-12 ">
        <div className=" container text-black grid grid-cols-5 gap-4 ">
          <StatCard
            title="Total Sample Tested"
            value={data.totalSamplesTested}
            date="12/12/2019"
          />
          <StatCard
            title="Confirmed Case"
            value={data.totalConfirmedCases}
            date="12/12/2019"
          />
          <StatCard
            title="Active State"
            value={data.totalActiveCases}
            date="12/12/2019"
          />
          <StatCard
            title="Discharged"
            value={data.discharged}
            date="12/12/2019"
          />
          <StatCard title="Death" value={data.death} date="12/12/2019" />
        </div>
      </div>

      <div className="mt-10 pb-96 h-full">
        <div className=" container h-full grid grid-rows-[auto,1fr] text-black">
          <div className=" font-[900] text-lg grid grid-cols-[30px,1fr,1fr,1fr,1fr,1fr] py-4  bg-green-600 text-white px-2 ">
            <p>S/N</p>
            <p className="pl-2">State</p>
            <p>Confirmed Case</p>
            <p>Case On Admission</p>
            <p>Discharged</p>
            <p>Death</p>
          </div>
          <div className=" h-full overflow-auto">
            {data.states?.map((state: any, index: number) => (
              <div className="grid grid-cols-[30px,1fr,1fr,1fr,1fr,1fr] py-4 px-2 ">
                {" "}
                <p>{index + 1}</p>
                <p className="pl-2">{state.state}</p>
                <p>{state.confirmedCases}</p>
                <p>{state.casesOnAdmission}</p>
                <p>{state.discharged}</p>
                <p>{state.death}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
