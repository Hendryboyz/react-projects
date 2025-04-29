import {styled} from "styled-components";

const StyledAuthButton = styled.button`
    padding: 1rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.25rem;
    color: #1f2937;
    background-color: #f0b322;
    border-radius: 6px;
    border: none;
    
    &:hover {
        background-color: #f0920e;
    }
`

const AuthButton = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded border-none text-[#1f2937] bg-[#f0b322] hover:bg-[#f0920e]"
      {...props}
    >
      {children}
    </button>
  );
}

export default AuthButton;