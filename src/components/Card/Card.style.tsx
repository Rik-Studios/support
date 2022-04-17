import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: var(--borderRadius);
  background-color: var(--white);
  text-align: center;
  overflow: hidden;
  padding: 30px 15px;
  will-change: transform;
`

export const WrapperIcon = styled.div`
  font-size: 20px;
  background-color: var(--WhiterOpacity);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin: 0 auto 10px auto;
`

export const WrapperIconFeature = styled(WrapperIcon)`
  font-size: 35px;
  margin-top: 35px;
`

export const Title = styled.h2`
  font-size: 25px;
  text-align: center;
  color: #333;
`
export const WrapperList = styled.ul`
  list-style: none;
  margin: 15px 0;
`

export const WrapperItem = styled.li`
  list-style: none;
  line-height: calc(16px * 1.6);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`
export const WrapperIconItem = styled.span`
  display: inline-flex;
  margin-right: 5px;

  & > svg {
    font-size: 18px;
    fill: var(--purpleLigther);
  }
`

export const WrapperFeature = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  background-color: var(--purpleLigther);
  margin-bottom: 15px;
  text-transform: uppercase;
  color: var(--white);
  font-weight: 800;
  letter-spacing: 1px;
`

export const Price = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: var(--dark);
`

export const PriceMinnor = styled.span`
  font-size: 16px;
  font-weight: 300;
`

export const Link = styled.a`
  display: flex;
  width: 100%;
  height: 38px;
  border: 0;
  background-color: var(--streamarColor);
  border-radius: var(--borderRadius);
  font-size: 14px;
  color: var(--white);
  margin-top: 15px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus-within {
    background-color: var(--purpleDark);
  }
`

export const YouTubeLink = styled(Link)`
  background-color: var(--youtubeColor);
`
