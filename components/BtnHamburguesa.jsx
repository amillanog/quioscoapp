import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BtnHamburguesa = (props) => {
  const { initOpen = false, onclick, color = "white" } = props;

  const [open, setOpen] = useState(initOpen);
  useEffect(() => {
    setOpen(initOpen);
  }, [initOpen]);

  return (
    <>
    
      <div onClick={onclick}>
        <BoxBtnUser color={color} open={open}>
          <span></span>
          <span></span>
          <span></span>
        </BoxBtnUser>
      </div>
    </>
  );
};

export const BoxBtnUser = styled.div`
  display: block;
  width: 25px;
  height: 20px;
  position: relative;
  cursor: pointer;
  z-index: 2;

  & span {
    width: 100%;
    height: 4px;
    border-radius: 4px;
    display: block;
    position: absolute;
    background-color: ${(props) => props.color};
    transition: all 0.25s ease;
    transform-origin: -2px 100%;
  }

  & span:nth-child(2) {
    top: calc(50% - 2px);
  }

  & span:nth-child(3) {
    bottom: 0;
  }

  & span:nth-child(1) {
    transform: ${({ open }) =>
      open
        ? "rotate(45deg) translate(-2px, -3px) "
        : "rotate(0deg) translate(0, 0)"};
    width: ${({ open }) => (open ? "120% " : "100%")};
  }

  & span:nth-child(2) {
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  & span:nth-child(3) {
    transform: ${({ open }) =>
      open
        ? "rotate(-45deg) translate(-1px, 5px) "
        : "rotate(0deg) translate(0, 0)"};
    width: ${({ open }) => (open ? "120% " : "100%")};
  }
  & {
    z-index: 60;
  }
`;
export default BtnHamburguesa;
