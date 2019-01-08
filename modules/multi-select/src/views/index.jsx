export const Plugin = ({ slots, id, onSendData }) => {
  

  const handleChange = e => {
    const { value, checked } = e.target;

    console.log(value, checked);
  
    onSendData({
      type: 'channels',
      data: { value, selected: checked }
    });
  };

  return (
    <div className="multiple-choice"  >
      {slots.map((choice, index) => (
        <div key={index}>
          <input type="checkbox" value={choice}  onChange={handleChange} />
          {choice}
        </div>
      ))}
    </div>
  );
};


export const Entry = () => null;
