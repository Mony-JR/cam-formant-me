

interface PopupProps {
  jj: (value: boolean) => void;
  up: boolean;
}

const Popup: React.FC<PopupProps> = ({ jj, up }) => {

  return (
    <div className={`w-11/12 absolute bottom-0 shadow-2xl z-10 ${up ? 'h-[0]' : 'h-[100%]'}`}>
      <div onClick={() => jj(!up)} className="w-full h-[10%]"></div>
      <div className={`w-full h-[90%] bg-blue-400 flex-col justify-between ${up ? 'hidden' : 'flex'}`}>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
      </div>
    </div>
  );
};

export default Popup;
