import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 35px;
  line-height: calc(35px * 1.5);
  font-weight: 700;
  color: var(--white);
  letter-spacing: 1px;
  text-align: center;
  background-image: linear-gradient(to bottom, var(--white), var(--white));
  background-size: 5% 1px;
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-bottom: 10px;
  margin-bottom: 15px;
  text-transform: uppercase;
  margin-top: 35px;
`

export const WrapperList = styled.ul`
  list-style: none;
  color: var(--dark);
  font-size: 18px;
  line-height: calc(18px * 1.6);
  margin-bottom: 35px;
  background-color: var(--white);
  border-radius: var(--borderRadius);
  padding: 30px 15px;
`

export const WrapperItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const Strong = styled.strong`
  display: inline-flex;
  margin: 0 5px 0 3px;
  align-items: center;
  flex-wrap: wrap;
`

export const Link = styled.a`
  display: inline-block;
  margin: 0 0 0 5px;
  color: var(--purple);
`

export const WrapperIconItem = styled.span`
  display: inline-flex;
  margin-right: 5px;

  & > svg {
    font-size: 18px;
    fill: var(--purpleLigther);
  }
`
