import styled from 'styled-components';
import { TokenColorSecondaryRed } from '../../theme/variables';

interface Props {
  error?: boolean,
  chips?: string[],
}

export default styled.div`
  box-sizing: border-box;
  margin: 0;
  position: relative;
  width: 100%;
  min-height: 32px;
  padding: 0px 4px;
  color: #06182a;
  font-size: 14px;
  line-height: 1.43;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &:focus {
    border-color: ${(props: Props) =>
      props.error ? TokenColorSecondaryRed : "#538dd4"};
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(45, 110, 200, 0.2);
  }

  &:hover {
    border-color: ${(props: Props) =>
      props.error ? TokenColorSecondaryRed : "#538dd4"};
    border-right-width: 1px !important;
  }

  & > .ant-input {
    border-color: inherit !important;
    box-shadow: none !important;
    border: none;
    width: ${(props: Props) => props.chips && props.chips.length > 0 && "240px"};
    display: inline-block !important;
  }
`;
