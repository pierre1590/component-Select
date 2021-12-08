import { FaCaretDown,FaCaretUp } from "react-icons/fa";
import { useState } from "react";

const options = [
    {label:'Piero Sabino', value:'Piero Sabino'},
    {label:'Edmondo di Ronza', value:'Edmondo di Ronza'},
    {label:'Giorgio Coppola', value:'Giorgio Coppola'},
    {label:'Francesco Rua', value:'Francesco Rua'},
];

function Select({selected, setSelected}) {
  const [isActive, setIsActive] = useState(false);
  console.log(selected);
  return (
   
    <div className="dropdown">
     <h2 style={{textAlign:'center'}}>Select a member</h2>
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
       {isActive ? <FaCaretUp /> : <FaCaretDown />}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option.value);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
