import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fecthWorkouts = async () => {
      const res = await fetch("/api/workouts");
      const json = await res.json();

      if (res.ok) {
        setWorkouts(json);
      }
    };

    fecthWorkouts();
  }, []);

  return (
    <div>
      <div className="workouts">
        {workouts &&
          workouts.map((el) => <WorkoutDetails key={el._id} workout={el} />)}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
