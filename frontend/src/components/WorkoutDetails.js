const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg) : </strong> {workout.load}
      </p>
      <p>
        <strong>Reps (kg) : </strong> {workout.reps}
      </p>
      <span>CreatedAt : {workout.createdAt}</span>
    </div>
  );
};

export default WorkoutDetails;
