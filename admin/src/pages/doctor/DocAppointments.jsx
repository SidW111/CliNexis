import { useDoctorContext } from "../../context/DoctorContext";

const DocAppointments = () => {
    const {appointments} = useDoctorContext();
  return (
    <div className="w-full max-w-5xl m-5">
      <h1 className="font-medium text-lg mb-3">All Appointments</h1>

      <div className="bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll">
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b">
          <p></p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        <div>{
            
            }</div>
      </div>
    </div>
  );
};

export default DocAppointments;
