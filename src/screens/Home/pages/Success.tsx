type TProps = {
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
};

const Success: React.FC<TProps> = ({ onPageChange }: TProps) => {
  return (
    <div className="success">
      Successfully
      <button onClick={() => onPageChange(1)}>Back to home</button>
    </div>
  );
};

export default Success;
