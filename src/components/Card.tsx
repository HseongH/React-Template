import { Camera } from 'react-feather';

function Card() {
  return (
    <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
      <div className="shrink-0">
        <Camera className="text-5xl text-sky-400" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}

export default Card;
